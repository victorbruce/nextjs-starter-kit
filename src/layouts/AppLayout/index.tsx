import { ReactNode } from "react";

// components
import Navigation from "layouts/Navigation";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = (props: AppLayoutProps) => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
};

export default AppLayout;
