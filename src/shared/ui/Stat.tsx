import type { LucideIconType } from "../models"

type Props = {
    title: string,
    icon: LucideIconType,
    number: number,
    subtext?: string
}

export function Stat(props: Props) {
    const { title, number, subtext } = props;

    return (
        <div className="text-smoky-black bg-primary-background border-smoky-white 
            rounded-lg shadow-sm p-6">
            <div className="w-full flex justify-between mb-2">
                <h3 className="text-sm my-auto leading-3">{title}</h3>
                <props.icon size={16} className="my-auto" />
            </div>

            <p className="text-2xl font-bold">{number}</p>
            <p className="text-gray-500 text-xs leading-3">{subtext}</p>
        </div>
    )
}