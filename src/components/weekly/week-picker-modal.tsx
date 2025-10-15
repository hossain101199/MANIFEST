"use client";

import { cn } from "@/lib/utils";
import {
  formatWeekDisplay,
  getCurrentDateInfo,
  getWeeksInYear,
  isSameWeek,
  isWeekFuture,
} from "@/lib/utils/week-utils";
import { useWeeklyStore } from "@/store/weekly-store";
import { WeekInfo } from "@/types/weekly";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const WeekPickerModal = () => {
  const viewYear = useWeeklyStore((state) => state.viewYear);
  const incrementViewYear = useWeeklyStore((state) => state.incrementViewYear);
  const decrementViewYear = useWeeklyStore((state) => state.decrementViewYear);

  const selectedWeek = useWeeklyStore((state) => state.selectedWeek);
  const setSelectedWeek = useWeeklyStore((state) => state.setSelectedWeek);

  const weeksToShow = getWeeksInYear(viewYear);
  const currentWeek = getCurrentDateInfo();

  const handleSelectWeek = (weekInfo: WeekInfo) => {
    setSelectedWeek(weekInfo);
  };

  const isMaxYear = viewYear === getCurrentDateInfo().year;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Calendar className="h-5 w-5 cursor-pointer" />
      </DialogTrigger>

      <DialogContent className="flex flex-col max-h-[80dvh]">
        {/* Header */}
        <div className="py-6 border-b border-border">
          <DialogTitle className="text-xl font-semibold">
            Select a Week
          </DialogTitle>
        </div>

        {/* Year Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6">
          <Button variant="outline" size="sm" onClick={decrementViewYear}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <h3 className="text-lg font-semibold">{viewYear}</h3>

          <Button
            variant="outline"
            size="sm"
            onClick={incrementViewYear}
            disabled={isMaxYear}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
        <DialogDescription className="sr-only">hello</DialogDescription>
        {/* Weeks Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 flex-1 overflow-y-auto">
          {weeksToShow.map((weekInfo, index) => {
            const isCurrent = isSameWeek(weekInfo, currentWeek);
            const isFuture = isWeekFuture(weekInfo);
            const isSelected = isSameWeek(weekInfo, selectedWeek);

            return (
              <DialogClose
                key={weekInfo.weekNumber + weekInfo.year + index}
                asChild
              >
                <button
                  onClick={() => handleSelectWeek(weekInfo)}
                  disabled={isFuture}
                  className={cn(
                    "p-3 rounded-lg border-2 transition-all cursor-pointer",
                    isSelected
                      ? "border-primary bg-primary/10 text-primary font-semibold"
                      : isFuture
                      ? "border-border bg-muted/30 text-muted-foreground cursor-not-allowed opacity-50"
                      : "border-border bg-background hover:bg-muted/50 hover:border-primary/50"
                  )}
                >
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">
                      Week {weekInfo.weekNumber}
                    </div>
                    <div className="text-sm">
                      {formatWeekDisplay(weekInfo).dateRangeString}
                    </div>
                    {isCurrent && (
                      <div className="text-xs mt-1 px-2 py-0.5 bg-primary/20 text-primary rounded inline-block">
                        {getCurrentDateInfo().formattedTodayDate}
                      </div>
                    )}
                  </div>
                </button>
              </DialogClose>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WeekPickerModal;
