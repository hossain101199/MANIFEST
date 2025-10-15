import {
  getCurrentDateInfo,
  getNextWeek,
  getPreviousWeek,
  isWeekFuture,
} from "@/lib/utils/week-utils";
import { WeekInfo } from "@/types/weekly";
import { create } from "zustand";

interface WeeklyState {
  // State
  selectedWeek: WeekInfo;
  viewYear: number;

  // Actions
  setSelectedWeek: (week: WeekInfo) => void;
  goToPreviousWeek: () => void;
  goToNextWeek: () => void;
  goToCurrentWeek: () => void;
  incrementViewYear: () => void;
  decrementViewYear: () => void;
}

export const useWeeklyStore = create<WeeklyState>((set, get) => ({
  // Initial state
  selectedWeek: getCurrentDateInfo(),
  viewYear: getCurrentDateInfo().year,

  // Actions
  setSelectedWeek: (week) => {
    // Prevent selecting future weeks
    if (!isWeekFuture(week)) {
      set({ selectedWeek: week });
    }
  },

  goToPreviousWeek: () => {
    const currentWeek = get().selectedWeek;
    const prevWeek = getPreviousWeek(currentWeek);
    set({ selectedWeek: prevWeek });
  },

  goToNextWeek: () => {
    const currentWeek = get().selectedWeek;
    const nextWeek = getNextWeek(currentWeek);
    // Only navigate if next week is not in the future
    if (!isWeekFuture(nextWeek)) {
      set({ selectedWeek: nextWeek });
    }
  },

  goToCurrentWeek: () => {
    set({ selectedWeek: getCurrentDateInfo() });
  },

  incrementViewYear: () => {
    const currentYear = get().viewYear;
    const maxYear = getCurrentDateInfo().year;
    if (currentYear < maxYear) {
      set({ viewYear: currentYear + 1 });
    }
  },

  decrementViewYear: () => {
    set((state) => ({ viewYear: state.viewYear - 1 }));
  },
}));
