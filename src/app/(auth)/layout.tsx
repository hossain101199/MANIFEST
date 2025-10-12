import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-gradient-to-br from-background via-background to-muted/20">
      {children}
    </main>
  );
};

export default AuthLayout;
