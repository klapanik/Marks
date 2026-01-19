import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type Props = {
    isEyeOpen: boolean;
    setIsEyeOpen: Dispatch<SetStateAction<boolean>>;
};

export function PasswordEye({ isEyeOpen, setIsEyeOpen }: Props) {
    return (
        <Button
            onClick={() => setIsEyeOpen((prev) => !prev)}
            variant="ghost"
            type="button"
            className="hover:bg-white cursor-pointer my-auto"
        >
            {isEyeOpen ? <Eye /> : <EyeOff />}
        </Button>
    );
}
