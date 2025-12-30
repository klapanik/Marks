import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { useState } from "react";

import { RootLayout } from "@/layouts/RootLayout";
import { MainPage } from "@/pages/MainPage/MainPage";
import { SubjectsPage } from "@/pages/SubjectsPage/SubjectsPage";
import { Auth } from "@/widgets/Auth/Auth";
import { MessageAlert } from "@/shared/ui/Alerts/MessageAlert";

import { AlertProvider } from "./providers/AlertProvider";

export function App() {
    const [alertData, setAlertData] = useState({
        title: "Welcome!",
        isOpen: false,
    });

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/home" element={<MainPage />} />

                    <Route path="/subjects" element={<SubjectsPage />} />
                </Route>

                <Route path="/auth" element={<Auth />} />
            </>
        )
    );

    return (
        <div className="relative">
            <AlertProvider value={{ alertData, setAlertData }}>
                <MessageAlert />
                <RouterProvider router={router} />;
            </AlertProvider>
        </div>
    );
}
