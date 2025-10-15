import { WeekInfo } from "./../types/weekly";

/**
 * Get ISO week number for a given date
 */
export const getWeekNumber = (date: Date): number => {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
};

/**
 * Get week information for current week
 */
export const getCurrentDateInfo = (): WeekInfo => {
  const today = new Date();
  const weekNumber = getWeekNumber(today);
  const year = today.getFullYear();
  const startDate = getWeekStartDate(year, weekNumber);
  const endDate = getWeekEndDate(startDate);

  const formattedTodayDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  return {
    today,
    weekNumber,
    startDate,
    endDate,
    year,
    formattedTodayDate,
  };
};

/**
 * Get the number of ISO weeks in a given year.
 * A year has 52 weeks unless January 1st is a Thursday,
 * or it's a leap year and January 1st is a Wednesday (when the year starts on a Thursday).
 */
export const getWeekNumberInYear = (year: number): number => {
  const dec28 = new Date(year, 11, 28);
  const weekNumber = getWeekNumber(dec28);
  return weekNumber;
};

/**
 * Get the start date (Monday) of a week
 */
export const getWeekStartDate = (year: number, weekNumber: number): Date => {
  const simple = new Date(year, 0, 1 + (weekNumber - 1) * 7);
  const dow = simple.getDay();
  const ISOweekStart = simple;
  if (dow <= 4) {
    ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  } else {
    ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  }
  return ISOweekStart;
};

/**
 * Get the end date (Sunday) of a week
 */
export const getWeekEndDate = (startDate: Date): Date => {
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);
  return endDate;
};

/**
 * Get week info by year and week number
 */
export const getWeekInfo = (year: number, weekNumber: number): WeekInfo => {
  const startDate = getWeekStartDate(year, weekNumber);
  const endDate = getWeekEndDate(startDate);

  return {
    weekNumber,
    year,
    startDate,
    endDate,
  };
};

export const getWeeksInYear = (year: number) => {
  const totalWeeks = getWeekNumberInYear(year);

  const weeks: WeekInfo[] = [];

  for (let week = 1; week <= totalWeeks; week++) {
    const weekInfo = getWeekInfo(year, week);

    if (weekInfo.year === year) {
      weeks.push(weekInfo);
    }
  }

  return weeks;
};

/**
 * Check if a week is in the past
 */
export const isWeekPast = (weekInfo: WeekInfo): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return weekInfo.endDate < today;
};

/**
 * Check if a week is in the future
 */
export const isWeekFuture = (weekInfo: WeekInfo): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return weekInfo.startDate > today;
};

/**
 * Check if a week is the current week
 */
export const isWeekCurrent = (weekInfo: WeekInfo): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return weekInfo.startDate <= today && weekInfo.endDate >= today;
};

/**
 * Check if two weeks are the same
 */
export const isSameWeek = (week1: WeekInfo, week2: WeekInfo): boolean => {
  return week1.startDate.getTime() === week2.startDate.getTime();
};

/**
 * Get previous week info
 */
export const getPreviousWeek = (weekInfo: WeekInfo): WeekInfo => {
  const prevWeekNumber = weekInfo.weekNumber - 1;

  if (prevWeekNumber < 1) {
    // Go to last week of previous year
    const prevYear = weekInfo.year - 1;
    const lastWeekOfPrevYear = getWeekNumberInYear(weekInfo.year);
    return getWeekInfo(prevYear, lastWeekOfPrevYear);
  }

  return getWeekInfo(weekInfo.year, prevWeekNumber);
};

/**
 * Get next week info
 */
export const getNextWeek = (weekInfo: WeekInfo): WeekInfo => {
  const nextWeekNumber = weekInfo.weekNumber + 1;
  if (nextWeekNumber > getWeekNumberInYear(weekInfo.year)) {
    // Go to first week of next year
    return getWeekInfo(weekInfo.year + 1, 1);
  }
  return getWeekInfo(weekInfo.year, nextWeekNumber);
};

/**
 * Format week display string
 */
export const formatWeekDisplay = (weekInfo: WeekInfo) => {
  const startMonth = weekInfo.startDate.toLocaleDateString("en-US", {
    month: "short",
  });
  const endMonth = weekInfo.endDate.toLocaleDateString("en-US", {
    month: "short",
  });

  const startDay = weekInfo.startDate.getDate();
  const endDay = weekInfo.endDate.getDate();

  const startYear = weekInfo.startDate.getFullYear();
  const endYear = weekInfo.endDate.getFullYear();

  const year = weekInfo.year;

  // Get Month as a full string for comparison
  const startMonthFull = weekInfo.startDate.toLocaleDateString("en-US", {
    month: "long",
  });
  const endMonthFull = weekInfo.endDate.toLocaleDateString("en-US", {
    month: "long",
  });

  let dateRangeString: string;

  // Case 1: Same Month (and implicitly same Year)
  if (startMonthFull === endMonthFull) {
    dateRangeString = `${startMonth} ${startDay} - ${endDay}, ${year}`;

    // Case 2: Different Year (and different Month)
  } else if (startYear !== endYear) {
    dateRangeString = `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;

    // Case 3: Different Month, but Same Year
  } else {
    dateRangeString = `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`;
  }

  const displayFullString = `Week ${weekInfo.weekNumber} • ${dateRangeString}`;

  return {
    startDay,
    endDay,
    startMonth,
    startMonthFull,
    endMonth,
    endMonthFull,
    startYear,
    endYear,
    dateRangeString,
    displayFullString,
  };
};
