import { ReactNode } from "react";

import Header from "../components/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="mt-10 p-4">{children}</main>
    </>
  );
};

export default Layout;
