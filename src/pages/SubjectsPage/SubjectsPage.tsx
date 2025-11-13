import { useEffect, useState } from "react";
import { AddNewSubject } from "./AddNewSubject/AddNewSubject";
import { firestoreService } from "@/services/firebase/firestore";
import type { DocumentData } from "firebase/firestore";
import { BASIC_SUBJECT_COLLECTION_NAME } from "@/services/firebase/collections/names";

export function SubjectsPage() {
    const [basicSubjects, setBasicSubjects] = useState<DocumentData[]>();

    useEffect(() => {
        async function getBasicSubject() {
            const data: DocumentData[] = await firestoreService.getAllDocs(BASIC_SUBJECT_COLLECTION_NAME);
            setBasicSubjects(data);
        }

        getBasicSubject();
    }, []);

    console.log(basicSubjects);

    return (
        <section>
            <div>
                <h2 className="font-bold text-3xl">Предметы</h2>
                <p className="text-muted-foreground">Выберите предметы, которые вы изучаете</p>
            </div>

            {/* <YourSubjects /> */}
            <AddNewSubject />
            {/* <BasicSubjects basicSubjects={basicSubjects} /> */}
        </section>
    )
}