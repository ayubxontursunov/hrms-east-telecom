import create from "zustand";
import { persist } from "zustand/middleware";

const Key = create(
  persist(
    (set) => ({
      isLogin: false,
      isAdmin: false,
      keepMeLogin: false,
      language: "en",
      availability:"not set yet",
      mood:" not set yet",
      setAvailability: (newState) => set({ availability: newState }),
      setMood: (newState) => set({ mood: newState }),
      setLanguage: (newState) => set({ language: newState }),
      setIsLogin: (newState) => set({ isLogin: newState }),
      setIsAdmin: (newState) => set({ isAdmin: newState }),
      setKeepMeLogin: (newState) => set({ keepMeLogin: newState }),
    }),
    {
      name: "persisted-store",
      getStorage: () => localStorage,
    }
  )
);

export default Key;
