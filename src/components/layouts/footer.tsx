import { LEGAL_ROUTES, PUBLIC_ROUTES } from "@/lib/routes";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import Container from "../common/Container";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: PUBLIC_ROUTES.FEATURES },
      { label: "How It Works", href: PUBLIC_ROUTES.HOW_IT_WORKS },
      { label: "Pricing", href: PUBLIC_ROUTES.PRICING },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: PUBLIC_ROUTES.ABOUT },
      { label: "Blog", href: PUBLIC_ROUTES.BLOG },
      { label: "Contact", href: PUBLIC_ROUTES.CONTACT },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: LEGAL_ROUTES.PRIVACY },
      { label: "Terms of Service", href: LEGAL_ROUTES.TERMS },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">MANIFEST</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transform your life through daily mindfulness and intentional
              living.
            </p>
          </div>

          {/* Dynamic Link Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 MANIFEST. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
