import { create } from "zustand";

export const useTheory = create((set) => ({
  search: "",
  category: "",
  showSearch: false,
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
  toggleShowSearch: () => set((state) => ({ showSearch: !state.showSearch })),
}));
