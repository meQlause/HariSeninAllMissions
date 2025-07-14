import { create } from "zustand";
import type { DataStoreType } from "../utils/types";

export const useDataStore = create<DataStoreType>((set) => ({
  contents: null,
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/mainVideoBelajar`);
      if (!res) throw new Error("Error Fecthing Data");
      const contents = await res.json();
      set({ contents, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
