import type { AlertPropsType } from "@/shared/ui/Alerts/models";
import type { Dispatch, SetStateAction } from "react";

import { createContext } from "react";

export type AlertContextType = {
    alertData: AlertPropsType;
    setAlertData: Dispatch<SetStateAction<AlertPropsType>>;
};

export const AlertContext = createContext<AlertContextType | null>(null);


