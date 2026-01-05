import type { Dispatch, SetStateAction } from "react";

import { createContext } from "react";

export type LoadingContextType = {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const LoadingContext = createContext<LoadingContextType | null>(null);
