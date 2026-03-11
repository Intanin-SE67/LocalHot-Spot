import { create } from "zustand";

type Choice = {
    id: string;
    image: string;
    name: string;
    externalUrl: string;
    file?: File;
}

type EditState = {
    title: string;
    description: string;
    coverImage: string;
    language: string;
    category: string;
    visibility: string;
    choices: Choice[];

    setData: (data: Partial<EditState>) => void;
    reset: () => void;
}

export const useEditStore = create<EditState>((set) => ({
  title: "",
  description: "",
  coverImage: "",
  language: "",
  category: "",
  visibility: "PRIVATE",
  choices: [],


  setData: (data) => set((state) => ({...state,...data})),

  reset: () => set({
    title: "",
    description: "",
    coverImage: "",
    language: "",
    category: "",
    visibility: "PRIVATE",
    choices: [],
  }),
}));