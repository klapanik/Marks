import { AlertContext, type AlertContextType } from "./AlertContext";

type AlertProviderProps = {
    children: React.ReactNode;
    value: AlertContextType;
};

export const AlertProvider = ({ value, children }: AlertProviderProps) => {
    return <AlertContext value={value}>{children}</AlertContext>;
};
