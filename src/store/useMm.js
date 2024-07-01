import { create } from "zustand";

export const useMm = create((set) => ({
  openMm: false,
  heroBtn: true,
  toggleOpenMm: () => set((state) => ({ openMm: !state.openMm })),
  removeOpenMm: () => set({ openMm: false }),
  toggleHeroBtn: () => set((state) => ({ heroBtn: !state.heroBtn })),
  hideHeroBtn: () => set({ heroBtn: false }),
  showHeroBtn: () => set({ heroBtn: true }),
}));
