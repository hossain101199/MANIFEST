/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface FeelingState {
  feeling: string;
  setFeeling: (data: any) => void;
}

export const useFeelingStore = create<FeelingState>((set, get) => ({
  feeling: "",

  setFeeling: (data) => {
    set({ feeling: data.feeling });
  },
}));
