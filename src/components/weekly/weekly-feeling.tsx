import { isWeekPast } from "@/lib/utils/week-utils";
import { useFeelingStore } from "@/store/feeling-store";
import { useWeeklyStore } from "@/store/weekly-store";
import { Heart } from "lucide-react";
import FeelingAddUpdateModal from "../feeling/feeling-add-update-modal";
import FeelingDeleteModal from "../feeling/feeling-delete-modal";
import { Card } from "../ui/card";

const WeeklyFeeling = () => {
  const selectedWeekInfo = useWeeklyStore((state) => state.selectedWeek);
  const feeling = useFeelingStore((state) => state.feeling);

  const isLocked = isWeekPast(selectedWeekInfo);
  return (
    <Card className="p-6">
      {/* Section Header */}
      <div className="flex items-center space-x-2 mb-4">
        <Heart className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">This Week, I Want to Feel</h2>
      </div>

      {!feeling ? (
        <div className="text-center py-12 border-2 border-dashed border-border rounded-lg flex flex-col items-center">
          <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
          <p className="text-muted-foreground mb-4">
            How do you want to feel this week?
          </p>
          {!isLocked ? (
            <FeelingAddUpdateModal />
          ) : (
            <p className="text-sm text-muted-foreground">
              This week is locked. You cannot add a feeling.
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6 overflow-hidden">
            <p className="text-lg leading-relaxed italic wrap-anywhere">
              {feeling}
            </p>
          </div>

          {/* Action Buttons */}
          {!isLocked && (
            <div className="flex space-x-2">
              <FeelingAddUpdateModal isEdit />

              <FeelingDeleteModal />
            </div>
          )}

          {isLocked && (
            <p className="text-sm text-muted-foreground">
              🔒 This week is locked. You cannot edit or delete this feeling.
            </p>
          )}
        </div>
      )}
    </Card>
  );
};

export default WeeklyFeeling;
