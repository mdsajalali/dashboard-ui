"use client";

import { useState, useEffect, useRef } from "react";
import { HeaderProps } from "@/types/main.types";
import { Menu, X, Users, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ setIsSidebarOpen, isSidebarOpen }: HeaderProps) => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const toggleProfile = (): void => setIsProfileOpen(!isProfileOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);

  return (
    <header className="bg-white border-b border-gray-300 z-[999] flex items-center justify-between px-4 py-3 h-16 fixed top-0 left-0 right-0 sm:px-6 md:px-8 lg:px-10">
      <div className="flex items-center space-x-3">
        <button
          className="lg:hidden p-1"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <Link
          href="/"
          className="text-base cursor-pointer sm:text-lg font-semibold text-gray-800 truncate"
        >
          Teacher‘s Center
        </Link>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-3">
        <button className="p-2 rounded-full cursor-pointer hover:bg-gray-100 hidden sm:block">
          <Users size={18} className="text-gray-600" />
        </button>
        <button className="p-2 rounded-full cursor-pointer hover:bg-gray-100 hidden sm:block">
          <Bell size={18} className="text-gray-600" />
        </button>
        <div className="border-l h-8 sm:h-10 pl-2 hidden md:block"></div>

        <div className="relative flex items-center space-x-2 sm:space-x-3">
          <Image
            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
            alt="User"
            width={36}
            height={36}
            className="size-9 sm:size-10 rounded-full cursor-pointer"
            onClick={toggleProfile}
          />
          <span className="text-xs sm:text-sm font-medium text-gray-800 hidden md:block">
            Sir 1 <br />
            <span className="font-normal text-black">Chemistry | Level 3</span>
          </span>

          {isProfileOpen && (
            <div
              ref={profileRef}
              className="absolute top-12 right-0 bg-white rounded-lg shadow-lg w-56 sm:w-64 p-3 sm:p-4 border border-gray-200 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="flex flex-col items-start space-y-3">
                <div className="flex items-center space-x-3 w-full">
                  <Image
                    src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                    alt="User"
                    width={36}
                    height={36}
                    className="size-9 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-800 truncate">
                      Sir 1
                    </p>
                    <p className="text-xs text-gray-600 truncate">
                      Chemistry | Level 3
                    </p>
                  </div>
                </div>

                <div className="w-full border-t border-gray-200"></div>

                <button className="text-xs sm:text-sm cursor-pointer text-gray-700 hover:text-gray-900 w-full text-left truncate">
                  Profile Settings
                </button>
                <button className="text-xs sm:text-sm cursor-pointer text-gray-700 hover:text-gray-900 w-full text-left truncate">
                  Account
                </button>
                <button className="text-xs sm:text-sm cursor-pointer text-red-600 hover:text-red-800 w-full text-left truncate">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
