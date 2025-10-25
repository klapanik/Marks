import type { GradeType } from "@/entities/student/grade";
import { Grade } from "@/shared/ui/Grade/Grade";

export function LastGrades() {
    const lastMarks: GradeType[] = [{
        type: 'default',
        subject: 'Физика',
        date: '25 октября',
        grade: '10',
    },
    {
        type: 'default',
        subject: 'Физика',
        date: '26 октября',
        grade: '10',
    },
    {
        type: 'default',
        subject: 'Физика',
        date: '27 октября',
        grade: '10',
    },
    {
        type: 'default',
        subject: 'Физика',
        date: '28 октября',
        grade: '10',
    },
    {
        type: 'default',
        subject: 'Физика',
        date: '31 октября',
        grade: '10',
    }];

    return (
        <div className="primary-block w-full pb-6">
            <div className="mb-6">
                <h3 className="font-semibold text-2xl mb-[2.75px]">Последние оценки</h3>
                <p className="text-muted-foreground text-sm">Ваша успеваемость</p>
            </div>

            <div className="flex flex-col">
                {lastMarks.map((grade) => <Grade grade={grade} />)}
            </div>
        </div>
    )
}