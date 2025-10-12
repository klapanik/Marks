import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { House, BookOpenText, Calendar, GraduationCap, CalendarDays, School } from 'lucide-react';
import { NavLink } from "react-router-dom"

import type { LinkType } from "@/shared/models";
import { LogoutBtn } from "@/shared/ui/LogoutBtn";

const links: LinkType[] = [
    { title: 'Главная', url: '/home', icon: House },
    { title: 'Предметы', url: '/subjects', icon: BookOpenText },
    { title: 'Расписание', url: '/schedule', icon: Calendar },
    { title: 'Оценки', url: '/grades', icon: GraduationCap },
    { title: 'Четверти', url: '/quarters', icon: CalendarDays },
]

export function AppSidebar() {
    return (
        <div className="relative h-full">
            <SidebarTrigger className="absolute -right-9 top-4 cursor-pointer" />

            <Sidebar className="relative">
                <div className="pl-4 py-5">
                    <SidebarHeader className="w-[70%] pl-4 flex-row justify-between mb-5">
                        <div className="my-auto relative">
                            <School className="cursor-pointer school-icon transition-all
                                duration-700 hover:scale-125 hover:stroke-blue-800" />
                            {/* bg-gradient-to-r from-cyan-400 to-blue-600 */}
                        </div>

                        <div>
                            <h2 className="font-semibold text-2xl">Дневник</h2>
                            <p className="text-sm">оценок</p>
                        </div>
                    </SidebarHeader>

                    <SidebarContent>
                        <SidebarGroup className="p-0 text-sm">
                            <SidebarGroupLabel>Навигация</SidebarGroupLabel>

                            <SidebarGroupContent className="pl-1">
                                <SidebarMenu>
                                    {links.map(link => (
                                        <SidebarMenuItem key={link.title}>
                                            <SidebarMenuButton asChild>
                                                <NavLink to={link.url}>
                                                    <link.icon />
                                                    <span>{link.title}</span>
                                                </NavLink>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>

                    <SidebarFooter className="absolute bottom-3 right-0 w-full pl-5 bg-sidebar">
                        <LogoutBtn />
                    </SidebarFooter>
                </div>
            </Sidebar>
        </div>
    )
}