import { Bell, User } from "lucide-react";
import ManifestLogo from "../common/manifest-logo";
import { Button } from "../ui/button";

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between">
        {/* Logo & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <ManifestLogo />
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          {/* Notifications */}
          <Button variant="ghost" size="sm">
            <Bell className="h-5 w-5" />
          </Button>

          {/* User Menu */}
          <Button variant="ghost" size="sm">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
