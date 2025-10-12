import {
  BookOpen,
  Brain,
  Heart,
  LucideIcon,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import Container from "../common/Container";
import { Card } from "../ui/card";

const features = [
  {
    icon: Brain,
    title: "Daily Mindfulness",
    description:
      "Start each day with guided meditation and mindfulness exercises tailored to your needs.",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description:
      "Set meaningful goals and track your progress with intuitive visual analytics.",
  },
  {
    icon: BookOpen,
    title: "Wellness Journal",
    description:
      "Reflect on your journey with a beautiful digital journal for gratitude and growth.",
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description:
      "Visualize your wellness journey with detailed insights and milestone celebrations.",
  },
  {
    icon: Heart,
    title: "Habit Building",
    description:
      "Create sustainable healthy habits with our proven tracking and reminder system.",
  },
  {
    icon: Sparkles,
    title: "Personalized Experience",
    description:
      "Get customized recommendations based on your goals and preferences.",
  },
];

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need for Wellness
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to help you build lasting habits and
            achieve your wellness goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
