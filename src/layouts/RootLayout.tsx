import { SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/widgets/AppHeader/AppHeader";
import { AppSidebar } from "@/widgets/AppSidebar/AppSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase/config";

export function RootLayout() {
    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid);
            navigate('/');
        } else {
            navigate('/auth');
        }
    });

    return (
        <SidebarProvider>
            <div className="flex w-full">
                <AppSidebar />

                <div className="w-full">
                    <AppHeader />

                    <div className="p-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </SidebarProvider>
    )
}