import { create } from "zustand";

export const usePorto = create((set) => ({
  nav: false,
  toggleNav: () => set((state) => ({ nav: !state.nav })),
  hideNav: () => set({ nav: false }),
}));
