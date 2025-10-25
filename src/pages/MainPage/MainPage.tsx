import { TodaysSchedule } from "@/features/TodaysSchedule/TodaysSchedule";
import { HelloBlock } from "./HelloBlock/HelloBlock";
import { StatisticsGroup } from "./StatisticGroup/StatisticsGroup";
import { LastGrades } from "./LastGrades/LastGrades";

export function MainPage() {
    return (
        <section className="flex flex-col gap-6">
            <HelloBlock />
            <StatisticsGroup />

            <section className="grid grid-cols-2 gap-6">
                <TodaysSchedule scheduleType='secondary' />
                <LastGrades />
            </section>
        </section>
    )
}