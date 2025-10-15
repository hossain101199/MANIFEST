"use client";

import { Button } from "@/components/ui/button";
import { PUBLIC_ROUTES } from "@/lib/constants/routes";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Large Text */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            <h2 className="text-3xl font-bold">Page Not Found</h2>
          </div>
        </div>

        {/* Description */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-8">
          <p className="text-lg text-muted-foreground mb-4">
            Oops! The page you&apos;re looking for seems to have wandered off
            the path to wellness.
          </p>
          <p className="text-sm text-muted-foreground">
            Don&apos;t worry, even the best journeys have unexpected detours.
            Let&apos;s get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={PUBLIC_ROUTES.HOME}>
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
