import { HeaderProps } from "@/types/main.types";
import { Menu, X, Users, Bell } from "lucide-react";
import Image from "next/image";

const Header = ({ setIsSidebarOpen, isSidebarOpen }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-300 z-[999] flex items-center justify-between px-4 md:px-8 lg:px-10 py-3 h-16 fixed top-0 left-0 right-0">
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
      <div className="flex items-center md:space-x-3">
        <button className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
          <Users size={20} className="text-gray-600" />
        </button>
        <button className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />
        </button>
        <div className="border-l h-10 pl-2"></div>
        <div className="flex items-center md:space-x-3">
          <Image
            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
            alt="User"
            width={40}
            height={40}
            className="size-10 rounded-full cursor-pointer"
          />
          <span className="text-sm font-medium text-gray-800 hidden md:block">
            Sir 1 <br />{" "}
            <span className="font-normal text-black">Chemistry | Level 3</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
