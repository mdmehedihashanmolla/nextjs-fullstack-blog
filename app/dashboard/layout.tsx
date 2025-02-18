import Sidebar from "@/components/dashboard/leftsidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full">
      <div className="flex">
        <Sidebar/>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default layout;
