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

import { useAlertData } from "@/app/providers/AlertProvider";

export function SubjectsPage() {
    const { setAlertData } = useAlertData();
    const [basicSubjects, setBasicSubjects] = useState<DocumentData[]>([]);

    useEffect(() => {
        async function getBasicSubject() {
            const data: DocumentData[] = await firestoreService.getAllDocs(
                BASIC_SUBJECT_COLLECTION_NAME,
            );
            setBasicSubjects(data);
        }

        getBasicSubject();
    }, []);

    async function handleSubjectAdding(subjectName: string, id: string | number) {
        try {
            const userUid = firebaseAuthService.getUserUid();
            if (!userUid) return;

            const userDoc = await firestoreService.getDocById(USERS_COLLECTION_NAME, userUid);
            if (!userDoc) return;

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

            return { status: "success" };
        } catch (error) {
            if (typeof error !== "object" || error === null || !("message" in error)) return;

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

    return (
        <section>
            <div>
                <h2 className="font-bold text-3xl">Предметы</h2>
                <p className="text-muted-foreground">Выберите предметы, которые вы изучаете</p>
            </div>

            {/* <YourSubjects /> */}
            <AddNewSubject />
            <BasicSubjects basicSubjects={basicSubjects} handleAdding={handleSubjectAdding} />
        </section>
    );
}
