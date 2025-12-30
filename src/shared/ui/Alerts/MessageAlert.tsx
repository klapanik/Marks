import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Ban, BadgeCheck, CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAlertData } from "@/app/providers/AlertContext";

export function MessageAlert() {
    const alertContext = useAlertData();
    const { setAlertData, alertData } = alertContext;

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
                         ? "bg-[#ff00002e] border-destructive"
                         : "bg-white border-white"
                 }
            `}
        >
            <Button
                variant="ghost"
                onClick={() => setAlertData(prev => ({ ...prev, isOpen: false }))}
                className="hover:bg-[#ff00002e] absolute right-1 top-1 cursor-pointer"
            >
                <CircleX />
            </Button>

            {icon ?? variant === "destructive" ? <Ban /> : <BadgeCheck />}
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description ?? ""}</AlertDescription>
        </Alert>
    );
}
