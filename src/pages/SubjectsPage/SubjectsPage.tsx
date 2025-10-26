import { AddNewSubject } from "./AddNewSubject/AddNewSubject";

export function SubjectsPage() {
    return (
        <section>
            <div>
                <h2 className="font-bold text-3xl">Предметы</h2>
                <p className="text-muted-foreground">Выберите предметы, которые вы изучаете</p>
            </div>

            {/* <YourSubjects /> */}
            <AddNewSubject />
            {/* <BasicSubjects /> */}
        </section>
    )
}