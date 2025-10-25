import { EmptyTodaysSchedule } from "./EmptyTodaysSchedule/EmptyTodaysSchedule";

export function TodaysSchedule({ scheduleType }: { scheduleType: 'secondary' | 'main' }) {
    const isLessonsToday = false;

    return (
        <div className="bg-smoky-white border-smoky-white rounded-lg shadow-sm w-full p-6">
            {isLessonsToday ?
                <div>Schedule</div>
                :
                <EmptyTodaysSchedule scheduleType={scheduleType} />
            }
        </div>
    )
}
