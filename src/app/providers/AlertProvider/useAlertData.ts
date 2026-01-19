import { useContext } from "react";
import { AlertContext } from "./AlertContext";

export const useAlertData = () => {
    const context = useContext(AlertContext);
    if (!context) throw new Error("useAlertData must be used within AlertProvider");
    return context;
};
