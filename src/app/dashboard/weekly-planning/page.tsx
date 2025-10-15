"use client";

import WeekNavigator from "@/components/weekly/week-navigator";
import { formatWeekDisplay } from "@/lib/utils/week-utils";
import { useWeeklyStore } from "@/store/weekly-store";

const WeeklyPlanningPage = () => {
  const selectedWeekInfo = useWeeklyStore((state) => state.selectedWeek);

  return (
    <div className="space-y-8 py-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Weekly Planning</h1>
        <p className="text-muted-foreground">
          {formatWeekDisplay(selectedWeekInfo).displayFullString}
        </p>
      </div>

      <WeekNavigator />
    </div>
  );
};

export default WeeklyPlanningPage;
