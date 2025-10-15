import WeekNavigator from "@/components/weekly/week-navigator";

const WeeklyPlanningPage = () => {
  return (
    <div className="space-y-8 py-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Weekly Planning</h1>
        <p className="text-muted-foreground">Week 42 • October 13 - 19, 2025</p>
      </div>

      <WeekNavigator />
    </div>
  );
};

export default WeeklyPlanningPage;
