import { AlertContext, type AlertContextType } from "./AlertContext";

type Props = {
    children: React.ReactNode;
    value: AlertContextType;
};

export const AlertProvider = ({ value, children }: Props) => {
    return <AlertContext value={value}>{children}</AlertContext>;
};
