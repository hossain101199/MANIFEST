"use client";

import {
  formatWeekDisplay,
  getCurrentDateInfo,
  getNextWeek,
  isSameWeek,
  isWeekCurrent,
  isWeekFuture,
  isWeekPast,
} from "@/lib/utils/week-utils";
import { useWeeklyStore } from "@/store/weekly-store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import WeekPickerModal from "./week-picker-modal";

const WeekNavigator = () => {
  const selectedWeekInfo = useWeeklyStore((state) => state.selectedWeek);
  const goToPreviousWeek = useWeeklyStore((state) => state.goToPreviousWeek);
  const goToNextWeek = useWeeklyStore((state) => state.goToNextWeek);
  const goToCurrentWeek = useWeeklyStore((state) => state.goToCurrentWeek);

  // Check if we can go to next week
  const nextWeek = getNextWeek(selectedWeekInfo);
  const canGoNext = !isWeekFuture(nextWeek);

  // Check if we're viewing current week
  const isViewingCurrentWeek = isSameWeek(
    selectedWeekInfo,
    getCurrentDateInfo()
  );

  return (
    <Card className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6">
      {/* Previous Week Button */}
      <Button
        variant="outline"
        size="sm"
        className="w-full sm:w-auto flex items-center space-x-2"
        onClick={goToPreviousWeek}
      >
        <ChevronLeft className="h-5 w-5" />
        Previous
      </Button>

      {/* Current Week Display */}
      <div className="text-center flex-1">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <h2 className="text-xl font-semibold">
            {formatWeekDisplay(selectedWeekInfo).displayFullString}
          </h2>

          {/* 📍 WEEK PICKER */}
          <WeekPickerModal />
        </div>

        {/* Week Status Indicators */}
        <div className="flex items-center justify-center space-x-2">
          {isWeekCurrent(selectedWeekInfo) && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {getCurrentDateInfo().formattedTodayDate}
            </span>
          )}
          {isWeekPast(selectedWeekInfo) && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
              🔒 Locked
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-2">
          {/* Go to Current Week Button */}
          {!isViewingCurrentWeek && (
            <Button
              variant="ghost"
              size="sm"
              onClick={goToCurrentWeek}
              className="text-xs"
            >
              Go to Current Week
            </Button>
          )}
        </div>
      </div>

      {/* Next Week Button */}
      <Button
        variant="outline"
        size="sm"
        className="w-full sm:w-auto flex items-center space-x-2"
        onClick={goToNextWeek}
        disabled={!canGoNext}
      >
        Next
        <ChevronRight className="h-5 w-5" />
      </Button>
    </Card>
  );
};

export default WeekNavigator;
