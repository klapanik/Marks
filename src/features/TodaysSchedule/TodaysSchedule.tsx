import { EmptyTodaysSchedule } from "./EmptyTodaysSchedule/EmptyTodaysSchedule";

export function TodaysSchedule({ scheduleType }: { scheduleType: 'secondary' | 'main' }) {
    const isLessonsToday = false;

    return (
        <div className="primary-block w-full">
            {isLessonsToday ?
                <div>Schedule</div>
                :
                <EmptyTodaysSchedule scheduleType={scheduleType} />
            }
        </div>
    )
}
