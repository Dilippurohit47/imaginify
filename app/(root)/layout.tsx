import Mobilenav from "@/components/shared/mobilenav";
import Sidebar from "@/components/shared/sidebar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";


const Layout = async ({ children }: { children: React.ReactNode }) => {



  return (
    <main className="root">
      <Sidebar/>
      <Mobilenav/>
      <div className="root-container">

        <div className="wrapper">{children}</div>
      </div>
      <Toaster/>
    </main>
  );
};

export default Layout;
