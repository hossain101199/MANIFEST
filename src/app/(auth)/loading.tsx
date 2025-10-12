import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const AuthLoading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 animate-ping">
              <Sparkles className="h-12 w-12 text-primary/30" />
            </div>
            <Sparkles className="h-12 w-12 text-primary relative animate-pulse" />
          </div>
          <h1 className="text-2xl font-bold">MANIFEST</h1>
        </div>

        {/* Loading Card */}
        <Card className="rounded-2xl shadow-lg p-8">
          <div className="space-y-4">
            {/* Skeleton for title */}
            <div className="h-8 bg-muted rounded animate-pulse"></div>

            {/* Skeleton for subtitle */}
            <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>

            {/* Skeleton for button */}
            <div className="h-10 bg-muted rounded animate-pulse mt-6"></div>

            {/* Skeleton for divider */}
            <div className="h-px bg-border my-6"></div>

            {/* Skeleton for form fields */}
            <div className="space-y-4">
              <div className="h-10 bg-muted rounded animate-pulse"></div>
              <div className="h-10 bg-muted rounded animate-pulse"></div>
            </div>

            {/* Skeleton for submit button */}
            <div className="h-11 bg-muted rounded animate-pulse mt-6"></div>
          </div>
        </Card>

        {/* Loading text */}
        <p className="text-center text-sm text-muted-foreground mt-6 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default AuthLoading;
