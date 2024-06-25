import { create } from "zustand";

export const useMm = create((set) => ({
  openMm: false,
  toggleOpenMm: () => set((state) => ({ openMm: !state.openMm })),
  removeOpenMm: () => set({ openMm: false }),
}));
