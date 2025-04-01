import { HeaderProps } from "@/types/main.types";
import { Menu, X, Users, Bell } from "lucide-react";



const Header = ({ setIsSidebarOpen, isSidebarOpen }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm z-[999] flex items-center justify-between px-4 py-3 h-16 fixed top-0 left-0 right-0">
      <div className="flex items-center space-x-3">
        <button
          className="md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-lg font-semibold text-gray-800">
          Teacher‘s Center
        </h1>
      </div>
      <div className="flex items-center space-x-3">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Users size={20} className="text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span className="text-sm font-medium text-gray-800 hidden md:block">
            Sir 1 | Chemistry | Level 3
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
