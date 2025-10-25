import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import { RootLayout } from "@/layouts/RootLayout";
import { MainPage } from "@/pages/MainPage/MainPage";
import { SubjectsPage } from "@/pages/SubjectsPage/SubjectsPage";

export function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/home" element={<MainPage />} />

            <Route path="/subjects" element={<SubjectsPage />} />
        </Route>
    ));

    return (
        <RouterProvider router={router} />
    )
}