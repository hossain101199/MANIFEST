import { Sparkles } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 animate-ping">
            <Sparkles className="h-16 w-16 text-primary/30" />
          </div>
          <Sparkles className="h-16 w-16 text-primary relative animate-pulse" />
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-semibold mb-2">MANIFEST</h2>
        <p className="text-muted-foreground animate-pulse">
          Loading your journey...
        </p>

        {/* Loading Dots Animation */}
        <div className="flex items-center justify-center space-x-2 mt-6">
          <div
            className="h-2 w-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="h-2 w-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="h-2 w-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
