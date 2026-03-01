import { useEffect, useState } from "react";

import { TodaysSchedule } from "@/features/TodaysSchedule/TodaysSchedule";
import { HelloBlock } from "./HelloBlock/HelloBlock";
import { StatisticsGroup } from "./StatisticGroup/StatisticsGroup";
import { LastGrades } from "./LastGrades/LastGrades";

import { onAuthStateChanged } from "firebase/auth";
import { firestoreService } from "@/services/firebase/firestore";
import { USERS_COLLECTION_NAME } from "@/services/firebase/collections/names";
import { firebaseAuthService } from "@/services/firebase/auth";
import { auth } from "@/services/firebase/config";

import { useAlertData } from "@/app/providers/AlertProvider";

import { localStorageService } from "@/services/localStorage/localStorageService";

export function MainPage() {
    const { setAlertData } = useAlertData();

    const initialUserName = localStorageService.get("userName") ?? "";
    const [userName, setUserName] = useState(initialUserName);

    useEffect(() => {
        async function getUsersData() {
            try {
                const userUid = firebaseAuthService.getUserUid();
                if (!userUid) return;

                const userDoc = await firestoreService.getDocById(USERS_COLLECTION_NAME, userUid);
                if (!userDoc) {
                    throw new Error("Не найдено вашей учётной записи");
                }

                const userName = userDoc.name;
                setUserName(userName);

                localStorageService.set("userName", userName);
            } catch (error) {
                if (typeof error !== "object" || error === null || !("message" in error)) return;

                setAlertData((prev) => ({
                    ...prev,
                    title: error.message as string,
                    description: "",
                    variant: "destructive",
                    isOpen: true,
                }));
            }
        }

        onAuthStateChanged(auth, (user) => {
            if (user) {
                getUsersData();
            } else {
                const userName = localStorageService.get("userName") ?? "";
                setUserName(userName);
            }
        });
    }, [setAlertData]);

    // Todo: так же добавить класс, дату и учебную неделю

    return (
        <section className="flex flex-col gap-6">
            <HelloBlock userName={userName} />
            <StatisticsGroup />

            <section className="grid grid-cols-2 gap-6">
                <TodaysSchedule scheduleType="secondary" />
                <LastGrades />
            </section>
        </section>
    );
}
