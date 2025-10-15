import Container from "@/components/common/Container";
import DashboardHeader from "@/components/layouts/dashboard-header";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      {/* Header */}
      <DashboardHeader />

      {children}
    </Container>
  );
};

export default DashboardLayout;
