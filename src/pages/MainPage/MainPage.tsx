import { HelloBlock } from "./HelloBlock/HelloBlock";
import { StatisticsGroup } from "./StatisticGroup/StatisticsGroup";

export function MainPage() {
    return (
        <section>
            <HelloBlock />
            <StatisticsGroup />
        </section>
    )
}