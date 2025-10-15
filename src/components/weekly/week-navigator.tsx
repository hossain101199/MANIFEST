"use client";

import { WeekInfo } from "@/lib/types/weekly";
import {
  formatWeekDisplay,
  getCurrentDateInfo,
  getNextWeek,
  getPreviousWeek,
  isSameWeek,
  isWeekCurrent,
  isWeekFuture,
  isWeekPast,
} from "@/lib/utils/week-utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import WeekPickerModal from "./week-picker-modal";

const WeekNavigator = () => {
  const [selectedWeekInfo, setSelectedWeekInfo] = useState<WeekInfo>(
    getCurrentDateInfo()
  );

  const handlePreviousWeek = () => {
    const prevWeek = getPreviousWeek(selectedWeekInfo);
    setSelectedWeekInfo(prevWeek);
  };

  const handleNextWeek = () => {
    const nextWeek = getNextWeek(selectedWeekInfo);
    // Only allow navigation if next week is not in the future
    if (!isWeekFuture(nextWeek)) {
      setSelectedWeekInfo(nextWeek);
    }
  };

  const handleGoToCurrentWeek = () => {
    setSelectedWeekInfo(getCurrentDateInfo());
  };

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
        size="lg"
        className="w-full sm:w-auto"
        onClick={handlePreviousWeek}
      >
        <ChevronLeft className="h-5 w-5 mr-2" />
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
              onClick={handleGoToCurrentWeek}
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
        size="lg"
        className="w-full sm:w-auto"
        onClick={handleNextWeek}
        disabled={!canGoNext}
      >
        Next
        <ChevronRight className="h-5 w-5 ml-2" />
      </Button>
    </Card>
  );
};

export default WeekNavigator;
