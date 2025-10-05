import Container from "../common/Container";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description: "Sign up in seconds and tell us about your wellness goals.",
  },
  {
    number: "02",
    title: "Set Your Intentions",
    description:
      "Define what wellness means to you and set your daily practices.",
  },
  {
    number: "03",
    title: "Track Your Growth",
    description: "Build consistency and watch yourself transform day by day.",
  },
];

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  showConnector?: boolean;
}

const StepCard = ({
  number,
  title,
  description,
  showConnector = false,
}: StepCardProps) => {
  return (
    <div className="relative">
      <div className="text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
          <span className="text-2xl font-bold text-primary">{number}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {showConnector && (
        <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
      )}
    </div>
  );
};

const HowItWorksSection = () => {
  return (
    <Container as="section" id="how-it-works" className="py-20 max-w-7xl">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          How It Works
        </h2>
        <p className="text-lg text-muted-foreground">
          Start your wellness journey in three simple steps.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            showConnector={index < steps.length - 1}
          />
        ))}
      </div>
    </Container>
  );
};

export default HowItWorksSection;
