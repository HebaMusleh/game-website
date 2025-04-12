import React from "react";
import { Container, Footer, Header } from "../atoms";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
