import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemTitle } from "@/components/ui/item";
import type { DocumentData } from "firebase/firestore";
import { Check, Plus } from "lucide-react";
import { useState } from "react";

type Props = {
    subject: {
        name: string,
        id: string
    } | DocumentData
}

export function BasicSubject({ subject }: Props) {
    const [isAdded, setIsAdded] = useState(false);

    return (
        <Item key={subject.id} className={`${isAdded ? 'bg-primary-transparent border-border' : ''} p-3 rounded-xl`}>
            <ItemContent>
                <ItemTitle
                    className={`font-medium text-base ${isAdded ? 'text-primary' : ''}`}>
                    {subject.name}</ItemTitle>
            </ItemContent>
            <ItemActions>
                {isAdded ?
                    <Check className={`size-4 ${isAdded ? 'text-primary' : ''}`} />
                    :
                    <Button
                        variant="ghost"
                        onClick={() => { setIsAdded(prev => !prev) }}
                        className="cursor-pointer hover:bg-transparent p-0 size-4">
                        <Plus className="size-4" />
                    </Button>}
            </ItemActions>
        </Item>
    )
}