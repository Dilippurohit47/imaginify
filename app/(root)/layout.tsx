import Mobilenav from "@/components/shared/mobilenav";
import Sidebar from "@/components/shared/sidebar";
import { connectToDatabase } from "@/lib/database/mongoose";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {

  await connectToDatabase();

  return (
    <main className="root">
      <Sidebar/>
      <Mobilenav/>


      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
