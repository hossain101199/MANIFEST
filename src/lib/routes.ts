// Public Routes
export const PUBLIC_ROUTES = {
  HOME: "/",
  FEATURES: "/#features",
  HOW_IT_WORKS: "/#how-it-works",
  TESTIMONIALS: "/#testimonials",
  PRICING: "/pricing",
  ABOUT: "/about",
  BLOG: "/blog",
  CONTACT: "/contact",
} as const;

// Auth Routes
export const AUTH_ROUTES = {
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  FORGOT_PASSWORD: "/forgot-password",
} as const;

// Legal Routes
export const LEGAL_ROUTES = {
  PRIVACY: "/privacy",
  TERMS: "/terms",
} as const;
