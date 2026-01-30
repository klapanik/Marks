import { useEffect, useState } from "react";

import type { DocumentData } from "firebase/firestore";
import { firestoreService } from "@/services/firebase/firestore";
import {
    BASIC_SUBJECT_COLLECTION_NAME,
    USERS_COLLECTION_NAME,
} from "@/services/firebase/collections/names";
import { firebaseAuthService } from "@/services/firebase/auth";

import { AddNewSubject } from "./AddNewSubject/AddNewSubject";
import { BasicSubjects } from "./BasicSubjects/BasicSubjects";
import { UsersSubjects } from "./UserSubjects/UserSubjects";

import { useAlertData } from "@/app/providers/AlertProvider";
import { useLoading } from "@/app/providers/LoadingProvider";

export function SubjectsPage() {
    const { setAlertData } = useAlertData();
    const { setIsLoading } = useLoading();

    const [basicSubjects, setBasicSubjects] = useState<DocumentData[]>([]);
    const [alreadyAddedBasicSubjects, setAlreadyAddedBasicSubjects] = useState([]);
    const [allUserSubjects, setAllUserSubjects] = useState([]);

    const [version, setVersion] = useState(0);

    const userUid = firebaseAuthService.getUserUid();

    useEffect(() => {
        async function getBasicSubject() {
            try {
                setIsLoading(true);
                const data: DocumentData[] = await firestoreService.getAllDocs(
                    BASIC_SUBJECT_COLLECTION_NAME,
                );
                
                setBasicSubjects(data);
                setIsLoading(false);
            } catch (error) {
                if (typeof error !== "object" || error === null || !("message" in error)) return;
                setIsLoading(false);

                setAlertData((prev) => ({
                    ...prev,
                    title: error.message as string,
                    description: "",
                    variant: "destructive",
                    isOpen: true,
                }));
            }
        }

        getBasicSubject();
    }, [setIsLoading]);

    useEffect(() => {
        async function getAlreadyAddedBasicSubjects() {
            try {
                if (!userUid) return;
                setIsLoading(true);

                const userDoc = await firestoreService.getDocById(USERS_COLLECTION_NAME, userUid);
                if (!userDoc) return;

                const userSubjects = userDoc.subjects ?? [];

                const filteredSubjects = userSubjects.filter(
                    (subject: { subjectName: string; id: string | number }) =>
                        subject.id.toString()[0] === "b",
                ); // (already added subjects)

                setAlreadyAddedBasicSubjects(filteredSubjects);
                setIsLoading(false);
            } catch (error) {
                if (typeof error !== "object" || error === null || !("message" in error)) return;
                setIsLoading(false);

                setAlertData((prev) => ({
                    ...prev,
                    title: error.message as string,
                    description: "",
                    variant: "destructive",
                    isOpen: true,
                }));
            }
        }

        getAlreadyAddedBasicSubjects();
    }, [userUid, setAlertData, version, setIsLoading]);

    useEffect(() => {
        async function getAllUserSubjects() {
            try {
                if (!userUid) return;
                setIsLoading(true);

                const userDoc = await firestoreService.getDocById(USERS_COLLECTION_NAME, userUid);
                if (!userDoc) {
                    throw new Error("Не найдено вашей учётной записи");
                }

                const userSubjects = userDoc.subjects ?? [];
                setAllUserSubjects(userSubjects);
                setIsLoading(false);
            } catch (error) {
                if (typeof error !== "object" || error === null || !("message" in error)) return;
                setIsLoading(false);

                setAlertData((prev) => ({
                    ...prev,
                    title: error.message as string,
                    description: "",
                    variant: "destructive",
                    isOpen: true,
                }));
            }
        }

        getAllUserSubjects();
    }, [setAlertData, userUid, version, setIsLoading]);

    async function handleSubjectAdding(subjectName: string, id: string | number) {
        try {
            if (!userUid) return;
            setIsLoading(true);

            const userDoc = await firestoreService.getDocById(USERS_COLLECTION_NAME, userUid);
            if (!userDoc) {
                throw new Error("Пользователь не найден!");
            }

            const prevSubjects = userDoc.subjects ?? [];

            const isAlreadyInDataBase = !!prevSubjects.find(
                (item: { subjectName: string; id: string | number }) => item.id === id,
            );

            if (isAlreadyInDataBase) {
                throw new Error("Предмет уже добавлен в ваш список");
            }

            await firestoreService.updateDoc(USERS_COLLECTION_NAME, userUid, {
                subjects: [...prevSubjects, { subjectName, id }],
            });

            setAlertData((prev) => ({
                ...prev,
                title: "Успешно!",
                description: "Предмет добавлен в ваш список!",
                variant: "default",
                isOpen: true,
            }));

            setVersion((v) => v + 1);
            setIsLoading(false);

            return { status: "success" };
        } catch (error) {
            if (typeof error !== "object" || error === null || !("message" in error)) return;
            setIsLoading(false);

            setAlertData((prev) => ({
                ...prev,
                title: error.message as string,
                description: "",
                variant: "destructive",
                isOpen: true,
            }));

            return { status: "error" };
        }
    }

    async function handleDeletingSubject(id: string | number) {
        try {
            if (!userUid) return;
            setIsLoading(true);

            const userDoc = await firestoreService.getDocById(USERS_COLLECTION_NAME, userUid);
            if (!userDoc) {
                throw new Error("Пользователь не найден!");
            }

            const userSubjects = userDoc.subjects ?? [];

            const isInDataBase = !!userSubjects.find(
                (item: { subjectName: string; id: string | number }) => item.id === id,
            );

            if (!isInDataBase) {
                throw new Error(
                    "Предмета нет в вашем списке, произошла ошибка обновите странцу и попробуйте позже",
                );
            }

            const filteredSubjects = userSubjects.filter(
                (item: { subjectName: string; id: string | number }) => item.id !== id,
            );

            await firestoreService.updateDoc(USERS_COLLECTION_NAME, userUid, {
                subjects: [...filteredSubjects],
            });

            setAlertData((prev) => ({
                ...prev,
                title: "Успешно!",
                description: "Предмет удалён из вашего списка!",
                variant: "default",
                isOpen: true,
            }));

            setVersion((v) => v + 1);
            setIsLoading(false);
        } catch (error) {
            if (typeof error !== "object" || error === null || !("message" in error)) return;
            setIsLoading(false);

            setAlertData((prev) => ({
                ...prev,
                title: error.message as string,
                description: "",
                variant: "destructive",
                isOpen: true,
            }));
        }
    }

    return (
        <section className="flex flex-col gap-7">
            <div>
                <h2 className="font-bold text-3xl">Предметы</h2>
                <p className="text-muted-foreground">Выберите предметы, которые вы изучаете</p>
            </div>

            <UsersSubjects
                allUserSubjects={allUserSubjects}
                handleDeleting={handleDeletingSubject}
            />

            <AddNewSubject basicSubjects={basicSubjects} onSubmit={handleSubjectAdding} />

            <BasicSubjects
                basicSubjects={basicSubjects}
                handleAdding={handleSubjectAdding}
                alreadyAddedBasicSubjects={alreadyAddedBasicSubjects}
            />
        </section>
    );
}
