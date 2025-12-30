import { firebaseAuthService } from "@/services/firebase/auth";

import { LogOut } from "lucide-react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function LogoutBtn() {
    async function sighOut() {
        firebaseAuthService.signOutUser();
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start cursor-pointer transition-colors duration-500 hover:bg-white"
                >
                    <LogOut className="mr-3" />
                    <span>Выйти</span>
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                    <AlertDialogTitle>Вы уверены, что хотите выйти из аккаунта?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Если вы выйдите из аккаунта, вы не потеряете свою учетную запись и всё равно
                        сможете войти в аккаунт позже
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel className="cursor-pointer text-white hover:text-white">
                        Назад
                    </AlertDialogCancel>
                    <AlertDialogAction
                        className="cursor-pointer text-white hover:text-white"
                        onClick={sighOut}
                    >
                        Продолжить
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
