import { create } from "zustand";

type Choice = {
    id: string;
    image: string;
    name: string;
}

type CreateState = {
    title: string;
    description: string;
    coverImage: string;
    visibility: string;
    choices: Choice[];

    setData: (data: Partial<CreateState>) => void;
}

export const useCreateStore = create<CreateState>((set) => ({
  title: "",
  description: "",
  coverImage: "",
  visibility: "PRIVATE",
  choices: [],

  setData: (data) => set(data)
}));