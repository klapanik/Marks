import { handleFirebaseAuthErrorDescription } from "@/services/firebase/auth/errors";

import type { AlertPropsType } from "@/shared/ui/Alerts/models";
import type { Dispatch, SetStateAction } from "react";

export function triggerErrorAlert(
    error: Error | null,
    setAlertData: Dispatch<SetStateAction<AlertPropsType>>
) {
    if (!error) {
        setAlertData((prev) => ({
            ...prev,
            isOpen: false,
        }));

        return;
    }

    const parsedError = JSON.parse(error.message);
    const description = handleFirebaseAuthErrorDescription(parsedError.code);

    setAlertData((prev) => ({
        ...prev,
        title: "Ошибка",
        description,
        variant: "destructive",
        isOpen: true,
    }));
}
