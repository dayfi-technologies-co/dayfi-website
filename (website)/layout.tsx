import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import React, { PropsWithChildren } from "react";

export default function WebsitLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
