export type AlertPropsType = {
    title: string,
    description?: string,
    variant?: "default" | "destructive",
    icon?: React.ReactNode,
    isOpen: boolean,
};
