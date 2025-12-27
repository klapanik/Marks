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
} from "@/components/ui/sidebar";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { Kbd, KbdGroup } from "@/components/ui/kbd";

import { House, BookOpenText, Calendar, GraduationCap, CalendarDays, School } from 'lucide-react';
import { NavLink } from "react-router-dom";

import type { NavLinkType } from "@/shared/models";
import { LogoutBtn } from "@/shared/ui/LogoutBtn";

const links: NavLinkType[] = [
    { title: 'Главная', url: '/home', icon: House },
    { title: 'Предметы', url: '/subjects', icon: BookOpenText },
    { title: 'Расписание', url: '/schedule', icon: Calendar },
    { title: 'Оценки', url: '/grades', icon: GraduationCap },
    { title: 'Четверти', url: '/quarters', icon: CalendarDays },
]

export function AppSidebar() {
    return (
        <div className="relative h-full">
            <Tooltip>
                <TooltipTrigger asChild>
                    <SidebarTrigger className="transition-colors duration-300 hover:bg-smoky-white 
                        absolute -right-9 top-4 cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent
                    side="left"
                    className="flex items-center gap-2 p-2"
                >
                    <span className="text-sm text-primary">Боковая панель</span>
                    <KbdGroup>
                        <Kbd>Ctrl</Kbd>
                        <span>+</span>
                        <Kbd>B</Kbd>
                    </KbdGroup>
                </TooltipContent>
            </Tooltip>

            <Sidebar>
                <div className="px-4 py-5 relative h-full">
                    <SidebarHeader className="w-[70%] pl-4 flex-row justify-between mb-5">
                        <School className="my-auto cursor-pointer" />

                        <div>
                            <h2 className="font-semibold text-2xl">Дневник</h2>
                            <p className="text-sm">оценок</p>
                        </div>
                    </SidebarHeader>

                    <SidebarContent>
                        <SidebarGroup className="p-0">
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

                    <SidebarFooter className="absolute bottom-3 right-0 w-full pl-5">
                        <LogoutBtn />
                    </SidebarFooter>
                </div>
            </Sidebar>
        </div>
    )
}