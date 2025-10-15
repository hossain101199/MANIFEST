import { PUBLIC_ROUTES } from "@/lib/constants/routes";
import Link from "next/link";
import { ReactNode } from "react";
import Container from "../common/Container";
import { Card } from "../ui/card";

interface AuthCardProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  footer?: ReactNode;
}

const AuthCard = ({ children, title, subtitle, footer }: AuthCardProps) => {
  return (
    <Container className="min-h-screen flex items-center justify-center py-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href={PUBLIC_ROUTES.HOME}
            className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            MANIFEST
          </Link>
          <p className="text-muted-foreground">
            Begin your journey to wellness
          </p>
        </div>

        {/* Card */}
        <Card className="rounded-2xl shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>

          {children}
        </Card>

        {/* Footer */}
        {footer}
      </div>
    </Container>
  );
};

export default AuthCard;
