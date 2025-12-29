import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Props = {
    title: string,
    description?: string,
    variant?: 'default' | 'destructive',
    children: React.ReactNode,
};

export function MessageAlert({ title, description, children, variant }: Props) {
    return (
        <Alert variant={variant ?? "default"}>
            {children}
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description ?? ''}</AlertDescription>
        </Alert>
    );
}
