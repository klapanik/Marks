import type { DocumentData } from "firebase/firestore";
import { BookOpen } from "lucide-react";
import { UserSubject } from "./UserSubject/UserSubject";
import { EmptyUsersSubjects } from "../EmptyUserSubjects/EmptyUsersSubjects";

type Props = {
    allUserSubjects: DocumentData[] | { name: string; id: string | number }[];
    handleDeleting: (id: string | number) => void;
};

export function UsersSubjects({ allUserSubjects, handleDeleting }: Props) {
    return (
        <section className="primary-block">
            <div className="mb-6">
                <div className="flex gap-2 mb-1">
                    <BookOpen />
                    <h3 className="font-semibold text-2xl leading-none">Ваши предметы</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                    Предметы, по которым вы ведете учет оценок
                </p>
            </div>

            <div className={`${allUserSubjects.length === 0 ? 'px-10' : 'grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'}`}>
                {allUserSubjects.length === 0 ? (
                    <EmptyUsersSubjects />
                ) : (
                    allUserSubjects.map((subject) => (
                        <UserSubject
                            key={subject.id}
                            subject={subject}
                            handleDeleting={handleDeleting}
                        />
                    ))
                )}
            </div>
        </section>
    );
}
