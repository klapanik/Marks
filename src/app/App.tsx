import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import { RootLayout } from "@/layouts/RootLayout";

export function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>

        </Route>
    ));

    return (
        <RouterProvider router={router} />
    )
}