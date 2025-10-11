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
import { House, BookOpenText, Calendar, GraduationCap, CalendarDays } from 'lucide-react';
import { NavLink } from "react-router-dom"

import type { LinkType } from "@/shared/models";

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

            <Sidebar>
                <div className="pl-4 py-5">
                    <SidebarHeader></SidebarHeader>

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

                    <SidebarFooter></SidebarFooter>
                </div>
            </Sidebar>
        </div>
    )
}