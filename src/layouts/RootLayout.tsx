import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/widgets/AppSidebar/AppSidebar";
import { Outlet } from "react-router-dom";

export function RootLayout() {
    return (
        <SidebarProvider>
            <div>
                {/* <Header /> */}
                <AppSidebar />
                <Outlet />
            </div>
        </SidebarProvider>
    )
}