import { Stat } from "@/shared/ui/Stat";
import { Calendar, CalendarDays, TrendingUp } from "lucide-react";

export function StatisticsGroup() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Stat title="Сегодня уроков" icon={CalendarDays} number={0} subtext="Выходной день" />
            <Stat title="Оценки" icon={TrendingUp} number={0} subtext="за последние время" />
            <Stat title="Средний балл" icon={TrendingUp} number={9} subtext="за всё время" />
            <Stat title="Текущая неделя" icon={Calendar} number={1} subtext="учебного года" />
        </div>
    )
}