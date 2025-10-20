import { useFeelingStore } from "@/store/feeling-store";
import { AlertTriangle, Trash2, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";

const FeelingDeleteModal = () => {
  const [open, setOpen] = useState(false);

  const setFeeling = useFeelingStore((state) => state.setFeeling);

  const handleDelete = () => {
    setFeeling({ feeling: null });
    setOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </DialogTrigger>

      <DialogContent>
        <div className="flex gap-3">
          <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-destructive" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Delete Feeling</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Are you sure you want to delete this feeling? This action cannot
              be undone.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <DialogClose asChild>
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Cancel
            </Button>
          </DialogClose>

          <Button
            size="sm"
            variant="destructive"
            className="flex items-center gap-2"
            onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeelingDeleteModal;
