import NavBar from "@/components/navbar/NavBar";
import { ReactNode } from "react";
import Footer from "@/components/footer/Footer";

const Page = ({ children }: { children: ReactNode }) => (
  <div className="w-full min-h-screen flex flex-col" id="page">
    <NavBar />
    <main className="flex-1 min-h-[34rem] flex flex-col">{children}</main>
    <Footer />
  </div>
);

export default Page;
