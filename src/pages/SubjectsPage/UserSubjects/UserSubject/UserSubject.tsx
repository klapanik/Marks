import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemTitle } from "@/components/ui/item";
import { X } from "lucide-react";

import type { DocumentData } from "firebase/firestore";

type Props = {
    subject:
        | {
              subjectName: string;
              id: string;
          }
        | DocumentData;
    handleDeleting: (id: string | number) => void;
};

export function UserSubject({ subject, handleDeleting }: Props) {
    return (
        <Item key={subject.id} className="p-3 rounded-xl">
            <ItemContent>
                <ItemTitle className="font-medium text-base text-black">
                    {subject.subjectName}
                </ItemTitle>
            </ItemContent>
            <ItemActions>
                <Button
                    variant="ghost"
                    onClick={() => {
                        handleDeleting(subject.id);
                    }}
                    className="cursor-pointer transition-colors duration-350 hover:bg-transparent hover:text-destructive p-0 size-4"
                >
                    <X className="size-4" />
                </Button>
            </ItemActions>
        </Item>
    );
}
