import { create } from "zustand";

type Choice = {
    id: string;
    image: string;
    name: string;
    externalUrl: string;
    file?: File;
}

type CreateState = {
    title: string;
    description: string;
    coverImage: string;
    language: string;
    category: string;
    visibility: string;
    choices: Choice[];

    userId: string | null
    setUserId: (id: string) => void;

    setData: (data: Partial<CreateState>) => void;
}

export const useCreateStore = create<CreateState>((set) => ({
  title: "",
  description: "",
  coverImage: "",
  language: "",
  category: "",
  visibility: "PRIVATE",
  choices: [],
  userId: null,

  setUserId: (id) => set({ userId: id }),

  setData: (data) => set(data)
}));