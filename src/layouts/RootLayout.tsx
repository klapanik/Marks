import { Outlet } from "react-router-dom";

export function RootLayout() {
    return (
        <div>
            {/* <Header /> */}
            {/* <Sidebar /> */}
            <Outlet />
        </div>
    )
}