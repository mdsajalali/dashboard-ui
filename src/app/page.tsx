"use client";
import { useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("Materials");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 font-sans">
      {/* Header */}
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main Layout */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <Sidebar
          handleDropdownToggle={handleDropdownToggle}
          isSidebarOpen={isSidebarOpen}
          openDropdown={openDropdown}
        />

        {/* Main Content */}
        <MainContent setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Dashboard;
