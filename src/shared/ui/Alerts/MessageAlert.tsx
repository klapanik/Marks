import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Ban, BadgeCheck, CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useAlertData } from "@/app/providers/AlertProvider";

export function MessageAlert() {
    const { setAlertData, alertData } = useAlertData();

    const { title, description, icon, variant, isOpen } = alertData;

    return (
        <Alert
            variant={variant ?? "default"}
            className={`transition-all duration-700 w-[25%] fixed cursor-pointer border
                 ${
                     isOpen
                         ? "opacity-100 translate-x-0 right-[2%] bottom-[4%]"
                         : "opacity-0 -bottom-[5%] -right-[1%]"
                 } 
                 ${
                     variant === "destructive"
                         ? "bg-[#ffc6c6] border-destructive"
                         : "bg-white border-primary"
                 }
            `}
        >
            <Button
                variant="ghost"
                onClick={() => setAlertData((prev) => ({ ...prev, isOpen: false }))}
                className={`${
                    variant === "destructive"
                        ? "hover:bg-[#ff00002e]"
                        : "hover:bg-primary hover:text-white"
                } absolute right-1 top-1 cursor-pointer`}
            >
                <CircleX />
            </Button>

            {(icon ?? variant === "destructive") ? <Ban /> : <BadgeCheck />}
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description ?? ""}</AlertDescription>
        </Alert>
    );
}
