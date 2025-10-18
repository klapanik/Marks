import { SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/widgets/AppHeader/AppHeader";
import { AppSidebar } from "@/widgets/AppSidebar/AppSidebar";
import { Outlet } from "react-router-dom";

export function RootLayout() {
    return (
        <SidebarProvider>
            <div className="flex w-full">
                <AppSidebar />

                <div className="w-full">
                    <AppHeader />
                    <Outlet />
                </div>
            </div>
        </SidebarProvider>
    )
}