import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function LogoutBtn() {
    return (
        <Button variant="ghost" size="sm" className="w-full justify-start cursor-pointer 
            transition-colors duration-500 hover:bg-white">
            <LogOut className="mr-3" />
            <span>Выйти</span>
        </Button>
    )
}