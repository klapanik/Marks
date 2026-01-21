import type { DocumentData } from "firebase/firestore";
import { BasicSubject } from "./BasicSubject/BasicSubject";

type Props = {
    basicSubjects:
        | {
              name: string;
              id: string;
          }[]
        | DocumentData[];
    handleAdding: (subjectName: string, id: string | number) => void;
    alreadyAddedBasicSubjects: { subjectName: string; id: string | number }[];
};

export function BasicSubjects({ basicSubjects, handleAdding, alreadyAddedBasicSubjects }: Props) {
    if (!basicSubjects || !basicSubjects.length) return;

    return (
        <section className="primary-block">
            <div className="mb-6">
                <h3 className="font-semibold text-2xl leading-none mb-1">Доступные предметы</h3>
                <p className="text-muted-foreground text-sm">
                    Выберите предметы из стандартного списка
                </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                {basicSubjects.map((subject) => {
                    const isAlreadyAdded = !!alreadyAddedBasicSubjects.find(
                        (addedSubject: { subjectName: string; id: string | number }) =>
                            addedSubject.id == subject.id,
                    );

                    return (
                        <BasicSubject
                            subject={subject}
                            key={subject.id}
                            handleAdding={handleAdding}
                            isAlreadyAdded={isAlreadyAdded}
                        />
                    );
                })}
            </div>
        </section>
    );
}
