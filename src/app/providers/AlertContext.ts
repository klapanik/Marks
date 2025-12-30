import type { AlertPropsType } from "@/shared/ui/Alerts/models";
import type { Dispatch, SetStateAction } from "react";

import { createContext, useContext } from "react";

export type AlertContextType = {
    alertData: AlertPropsType;
    setAlertData: Dispatch<SetStateAction<AlertPropsType>>;
};

export const AlertContext = createContext<AlertContextType | null>(null);

export const useAlertData = () => {
    const context = useContext(AlertContext);
    if (!context) throw new Error("Context is undefined");
    return context;
};
