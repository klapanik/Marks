import { Link } from "react-router-dom";

import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty";

import { Calendar, CalendarDays } from "lucide-react";

export function EmptyTodaysSchedule({ scheduleType }: { scheduleType: 'secondary' | 'main' }) {
    return (
        <Empty className="md:p-0">
            <EmptyHeader className="self-start text-start items-start gap-0 w-full">
                <div className="flex">
                    {scheduleType === 'main' ? <EmptyMedia variant="icon" className="text-black inline size-auto my-auto mr-2"><Calendar /></EmptyMedia> : ''}
                    <EmptyTitle className="font-semibold leading-none text-2xl">Расписание на сегодня</EmptyTitle>
                </div>

                <EmptyDescription>суббота, 18 октября</EmptyDescription>
            </EmptyHeader>

            <EmptyContent className="py-8 text-muted-foreground gap-0">
                <div className="mb-4 mx-auto">
                    {scheduleType === 'secondary' ? <CalendarDays size={48} /> : <Calendar size={48} />}
                </div>
                <h4 className="text-base mb-0.5">Сегодня уроков нет</h4>
                <p>Отличный день для отдыха!</p>
            </EmptyContent>

            {scheduleType === 'secondary' ?
                <Link to='/schedule' className="bg-primary px-4 py-2 rounded-lg text-white transition-colors
                    duration-300 hover:bg-white hover:text-primary">Перейти в расписание</Link>
                : ''}
        </Empty>
    )
}