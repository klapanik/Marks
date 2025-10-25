import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle,
} from "@/components/ui/item";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { SquarePen, Trash2 } from "lucide-react";

import type { GradeType } from "@/entities/student/grade";
import './Grade.css';

export function Grade({ grade }: { grade: GradeType }) {
    return (
        <Item className="p-1">
            <ItemContent className={`flex flex-row justify-between 
                ${grade.type === 'action' ? 'flex-row-reverse justify-end gap-3' : ''}`}>
                <div>
                    <ItemTitle className="font-medium text-base">{grade.subject}</ItemTitle>
                    <ItemDescription>{grade.subtext ? grade.subtext : grade.date}</ItemDescription>
                </div>

                <Badge className={`text-white max-h-6 my-auto font-semibold 
                    ${grade.type === 'quarter' ? `grade-${grade.grade} quarter-grade` : ''}`}>
                    {grade.type === 'quarter' ? '~' : ''}
                    {grade.grade}
                </Badge>
            </ItemContent>
            {grade.type === 'action' ?
                <ItemActions>
                    <Button variant="outline" size="icon" className="text-destructive hover:text-destructive actionBtn">
                        <Trash2 />
                    </Button>

                    <Button variant="outline" size="icon" className="actionBtn">
                        <SquarePen />
                    </Button>
                </ItemActions>
                : ''}
        </Item>
    )
}