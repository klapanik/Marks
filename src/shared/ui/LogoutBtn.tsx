import { Button } from "@/components/ui/button";
import { firebaseAuthService } from "@/services/firebase/auth";
import { LogOut } from "lucide-react";

export function LogoutBtn() {
    async function sighOut() {
        firebaseAuthService.signOutUser();
    }

    // Todo: add confirm alert

    return (
        <Button variant="ghost" size="sm" className="w-full justify-start cursor-pointer 
            transition-colors duration-500 hover:bg-white" onClick={sighOut}>
            <LogOut className="mr-3" />
            <span>Выйти</span>
        </Button>
    )
}