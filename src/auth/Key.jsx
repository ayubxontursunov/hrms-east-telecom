import create from "zustand";
import { persist } from "zustand/middleware";

const Key = create(
  persist(
    (set) => ({
      isLogin: false,
      isAdmin: false,
      keepMeLogin: false,
      language: "en",
      color: "rgb(0, 0, 255)",
      setColor: (newColor) => set({ color: newColor }),
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
