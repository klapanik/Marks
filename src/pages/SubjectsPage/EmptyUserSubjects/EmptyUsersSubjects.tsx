import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty";

import { LibraryBig } from "lucide-react";

export function EmptyUsersSubjects() {
    return (
        <Empty className="md:p-0 mb-5.5">
            <EmptyHeader className="gap-0 max-w-lg">
                <div className="flex text-primary">
                    <EmptyMedia variant="icon" className="text-primary size-auto my-auto mr-1">
                        <LibraryBig size={48} />
                    </EmptyMedia>
                    <EmptyTitle className="leading-none text-xl">
                        У вас нет предметов в списке
                    </EmptyTitle>
                </div>

                <EmptyDescription className="w-full">
                    <p>Вы можете добавить предметы, которые хотите изучать, внизу</p>
                </EmptyDescription>
            </EmptyHeader>
        </Empty>
    );
}
