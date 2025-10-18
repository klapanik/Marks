import { SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/widgets/AppHeader/AppHeader";
import { AppSidebar } from "@/widgets/AppSidebar/AppSidebar";
import { Outlet } from "react-router-dom";

export function RootLayout() {
    return (
        <SidebarProvider>
            <div>
                <AppHeader />
                <AppSidebar />
                <Outlet />
            </div>
        </SidebarProvider>
    )
}