import { LoadingContext, type LoadingContextType } from "./LoadingContext";

type LoadingProviderProps = {
    children: React.ReactNode;
    value: LoadingContextType
};

export function LoadingProvider({ value, children }: LoadingProviderProps) {
    return <LoadingContext value={value}>{children}</LoadingContext>;
}
