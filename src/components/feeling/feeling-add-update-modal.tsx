import Yup from "@/lib/constants/yup";
import { cn } from "@/lib/utils";
import { useFeelingStore } from "@/store/feeling-store";
import { DialogClose } from "@radix-ui/react-dialog";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { Check, Edit2, Loader2, Plus, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";

// ✅ Types
interface FeelingFormValues {
  feeling: string;
}

// ✅ Validation Schema
const feelingSchema = Yup.object().shape({
  feeling: Yup.string()
    .trim()
    .required("Feeling is required")
    .max(250, "Please keep it concise (max 250 characters)."),
});

const FeelingAddUpdateModal = ({ isEdit = false }) => {
  const [open, setOpen] = useState(false);

  const feeling = useFeelingStore((state) => state.feeling);
  const setFeeling = useFeelingStore((state) => state.setFeeling);

  const handleSubmit = async (
    values: FeelingFormValues,
    { setSubmitting, resetForm }: FormikHelpers<FeelingFormValues>
  ) => {
    try {
      setFeeling(values);

      toast.success("Feeling saved successfully!");
      resetForm();
      setOpen(!open);
    } catch (error) {
      console.error("Error submitting feeling:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isEdit ? (
          <Button variant="outline" size="sm">
            <Edit2 className="h-4 w-4 mr-2" />
            Edit
          </Button>
        ) : (
          <Button className="flex items-center gap-2 w-fit">
            <Plus className="h-4 w-4" />
            Add Feeling
          </Button>
        )}
      </DialogTrigger>

      <DialogContent>
        <DialogTitle className="text-lg font-semibold">
          Add Weekly Feeling
        </DialogTitle>
        <DialogDescription className="text-sm text-muted-foreground mb-4">
          Describe the emotional state or mindset you want to cultivate this
          week.
        </DialogDescription>

        <Formik
          initialValues={{ feeling: isEdit ? feeling : "" }}
          validationSchema={feelingSchema}
          onSubmit={handleSubmit}
          validateOnBlur={false}
        >
          {({ touched, errors, isSubmitting }) => {
            return (
              <Form>
                <fieldset className="space-y-4" disabled={isSubmitting}>
                  <div>
                    <Field
                      as={Textarea}
                      id="feeling"
                      name="feeling"
                      type="text"
                      placeholder="e.g., Energized, focused, and ready to achieve my goals"
                      className={cn(
                        "w-full resize-none min-h-[100px] max-h-[200px] wrap-anywhere",
                        errors.feeling &&
                          touched.feeling &&
                          "border-destructive"
                      )}
                    />
                    <ErrorMessage
                      name="feeling"
                      component="p"
                      className="text-sm text-destructive mt-1"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      type="submit"
                      size="sm"
                      className="flex items-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Check className="h-4 w-4" />
                          Save
                        </>
                      )}
                    </Button>

                    <DialogClose asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-2"
                        disabled={isSubmitting}
                      >
                        <X className="h-4 w-4" />
                        Cancel
                      </Button>
                    </DialogClose>
                  </div>
                </fieldset>
              </Form>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default FeelingAddUpdateModal;
