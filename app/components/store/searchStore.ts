import { Value } from "@prisma/client/runtime/library";
import { create } from "zustand";
type SearchState = {
    search: string
    setSearch: (Value: string) => void
}

export const useSearchStore =create<SearchState>((set => ({
    search: "",
    setSearch: (value) => set({ search: value }),
})))