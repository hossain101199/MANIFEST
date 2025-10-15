// Public Routes
export const PUBLIC_ROUTES = {
  HOME: "/",
} as const;

// Auth Routes
export const AUTH_ROUTES = {
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
} as const;

// Protected Routes (Require Authentication)
export const PROTECTED_ROUTES = {
  WEEKLY_PLANNING: "/dashboard/weekly-planning",
} as const;
