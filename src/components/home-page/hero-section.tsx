import { AUTH_ROUTES, PUBLIC_ROUTES } from "@/lib/routes";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Container from "../common/Container";
import { Button } from "../ui/button";

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "50K+", label: "Mindful Moments" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "30+", label: "Countries" },
];

const HeroSection = () => {
  return (
    <Container as="section" className="pt-32 pb-20 text-center max-w-3xl">
      {/* Badge */}
      <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
        <Sparkles className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium">Your Journey Starts Here</span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
        Transform Your Life Through Daily Mindfulness
      </h1>

      {/* Subheading */}
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        Discover the transformative power of self-care and intentionality.
        Embark on a journey of daily mindfulness, holistic health, and personal
        growth.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href={AUTH_ROUTES.SIGN_UP}>
          <Button size="lg" className="w-full sm:w-auto">
            Start Free Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <Link href={PUBLIC_ROUTES.HOW_IT_WORKS}>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Learn More
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HeroSection;
