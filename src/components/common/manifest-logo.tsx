import { PUBLIC_ROUTES } from "@/lib/constants/routes";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const ManifestLogo = () => {
  return (
    <Link href={PUBLIC_ROUTES.HOME} className="flex items-center space-x-2">
      <Sparkles className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold">MANIFEST</span>
    </Link>
  );
};

export default ManifestLogo;
