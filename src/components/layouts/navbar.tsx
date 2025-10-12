import { AUTH_ROUTES, PUBLIC_ROUTES } from "@/lib/routes";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import Container from "../common/Container";
import { Button } from "../ui/button";

const Navbar = () => {
  const navLinks = [
    { href: PUBLIC_ROUTES.FEATURES, label: "Features" },
    { href: PUBLIC_ROUTES.HOW_IT_WORKS, label: "How It Works" },
    { href: PUBLIC_ROUTES.TESTIMONIALS, label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <Container className="flex justify-between items-center h-16">
        {/* Logo */}
        <Link href={PUBLIC_ROUTES.HOME} className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">MANIFEST</span>
        </Link>

        {/* Middle Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link href={AUTH_ROUTES.SIGN_IN}>
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href={AUTH_ROUTES.SIGN_UP}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
