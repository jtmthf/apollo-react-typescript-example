import * as React from "react";

interface CoreLayoutProps {
  children: React.ReactChildren;
}

export const CoreLayout = ({ children }: CoreLayoutProps) => (
  <div>
    {children}
  </div>
);

export default CoreLayout;
