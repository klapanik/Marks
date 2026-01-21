import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemTitle } from "@/components/ui/item";
import type { DocumentData } from "firebase/firestore";
import { Check, Plus } from "lucide-react";
import { useState } from "react";

type Props = {
    subject:
        | {
              name: string;
              id: string;
          }
        | DocumentData;
    handleAdding: (subjectName: string, id: string | number) => void;
    isAlreadyAdded: boolean;
};

export function BasicSubject({ subject, handleAdding, isAlreadyAdded }: Props) {
    const [isAdded, setIsAdded] = useState(!!isAlreadyAdded);

    async function handleSubjectAdding() {
        const responce = (await handleAdding(subject.name, subject.id)) ?? {};
        if ("status" in responce && responce.status === "error") return;
        setIsAdded((prev) => !prev);
    }

    return (
        <Item
            key={subject.id}
            className={`${isAdded ? "bg-primary-transparent border-border" : ""} p-3 rounded-xl`}
        >
            <ItemContent>
                <ItemTitle className={`font-medium text-base ${isAdded ? "text-primary" : ""}`}>
                    {subject.name}
                </ItemTitle>
            </ItemContent>
            <ItemActions>
                {isAdded ? (
                    <Check className={`size-4 ${isAdded ? "text-primary" : ""}`} />
                ) : (
                    <Button
                        variant="ghost"
                        onClick={handleSubjectAdding}
                        className="cursor-pointer hover:bg-transparent p-0 size-4"
                    >
                        <Plus className="size-4" />
                    </Button>
                )}
            </ItemActions>
        </Item>
    );
}
