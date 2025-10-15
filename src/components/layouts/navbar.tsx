import { AUTH_ROUTES } from "@/lib/constants/routes";
import Link from "next/link";
import Container from "../common/Container";
import ManifestLogo from "../common/manifest-logo";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <Container className="flex justify-between items-center h-16">
        {/* Logo */}
        <ManifestLogo />

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
