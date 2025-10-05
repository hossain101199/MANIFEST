import CTASection from "@/components/home-page/cta-section";
import FeaturesSection from "@/components/home-page/features-section";
import HeroSection from "@/components/home-page/hero-section";
import HowItWorksSection from "@/components/home-page/how-it-works-section";
import TestimonialsSection from "@/components/home-page/testimonials-section";
import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";

const Home = () => {
  return (
    <main className="bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
