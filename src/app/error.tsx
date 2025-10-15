"use client";

import { Button } from "@/components/ui/button";
import { PUBLIC_ROUTES } from "@/lib/constants/routes";
import { AlertTriangle, Home, RefreshCw, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error:", error);
  }, [error]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-destructive/10 mb-6">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            <h2 className="text-3xl font-bold">Something Went Wrong</h2>
          </div>
        </div>

        {/* Error Details */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-8">
          <p className="text-lg text-muted-foreground mb-4">
            We encountered an unexpected error on your wellness journey.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Don&apos;t worry, these things happen. Let&apos;s try to get you
            back on track.
          </p>

          {/* Error Message (Dev Mode Only) */}
          {process.env.NODE_ENV === "development" && (
            <div className="mt-6 p-4 bg-muted rounded-lg text-left">
              <p className="text-xs font-mono text-destructive break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs font-mono text-muted-foreground mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={reset} className="w-full sm:w-auto">
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </Button>
          <Link href={PUBLIC_ROUTES.HOME}>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
