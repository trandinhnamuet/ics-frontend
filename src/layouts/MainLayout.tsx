import type { ReactNode } from "react";

import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="flex-1 p-4">
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
