import { AUTH_ROUTES } from "@/lib/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "../common/Container";
import { Button } from "../ui/button";

const CTASection = () => {
  return (
    <Container as="section" className="py-20 max-w-4xl text-center">
      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-border rounded-3xl p-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join thousands of others transforming their lives through daily
          mindfulness and intentional living.
        </p>
        <Link href={AUTH_ROUTES.SIGN_UP}>
          <Button size="lg">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <p className="text-sm text-muted-foreground mt-4">
          No credit card required • Free forever
        </p>
      </div>
    </Container>
  );
};

export default CTASection;
