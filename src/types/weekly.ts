/**
 * Weekly Planning Data Types
 */

export interface WeekInfo {
  today?: Date;
  weekNumber: number;
  year: number;
  startDate: Date;
  endDate: Date;
  formattedTodayDate?: string;
}
