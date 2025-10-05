import { Quote } from "lucide-react";
import Container from "../common/Container";
import { Card } from "../ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Yoga Instructor",
    content:
      "MANIFEST has completely transformed my daily routine. The mindfulness exercises are exactly what I needed to stay centered.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    content:
      "As someone with a hectic schedule, this app helps me prioritize my mental health. The habit tracker is a game-changer!",
    avatar: "MC",
  },
  {
    name: "Emma Williams",
    role: "Content Creator",
    content:
      "I've tried many wellness apps, but MANIFEST stands out. It's beautiful, intuitive, and actually helps me grow.",
    avatar: "EW",
  },
];

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const TestimonialCard = ({
  name,
  role,
  content,
  avatar,
}: TestimonialCardProps) => {
  return (
    <Card className="p-6">
      <Quote className="h-8 w-8 text-primary/30 mb-4" />
      <p className="text-muted-foreground mb-6">{content}</p>
      <div className="flex items-center space-x-3">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-semibold text-primary">{avatar}</span>
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </Card>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Loved By Thousands
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our community has to say about their wellness journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
