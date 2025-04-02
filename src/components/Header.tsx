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
    <header className="fixed top-0 right-0 left-0 z-[999] flex h-16 items-center justify-between border-b border-gray-300 bg-white px-4 py-3 sm:px-6 md:px-8 lg:px-10">
      <div className="flex items-center space-x-3">
        <button
          className="p-1 lg:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <Link
          href="/"
          className="cursor-pointer truncate text-base font-semibold text-gray-800 sm:text-lg"
        >
          Teacher‘s Center
        </Link>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-3">
        <button className="hidden cursor-pointer rounded-full p-2 hover:bg-gray-100 sm:block">
          <Users size={18} className="text-gray-600" />
        </button>
        <button className="hidden cursor-pointer rounded-full p-2 hover:bg-gray-100 sm:block">
          <Bell size={18} className="text-gray-600" />
        </button>
        <div className="hidden h-8 border-l pl-2 sm:h-10 md:block"></div>

        <div className="relative flex items-center space-x-2 sm:space-x-3">
          <Image
            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
            alt="User"
            width={36}
            height={36}
            className="size-9 cursor-pointer rounded-full sm:size-10"
            onClick={toggleProfile}
          />
          <span className="hidden text-xs font-medium text-gray-800 sm:text-sm md:block">
            Sir 1 <br />
            <span className="font-normal text-black">Chemistry | Level 3</span>
          </span>

          {isProfileOpen && (
            <div
              ref={profileRef}
              className="absolute top-12 right-0 z-50 max-h-[calc(100vh-4rem)] w-56 overflow-y-auto rounded-lg border border-gray-200 bg-white p-3 shadow-lg sm:w-64 sm:p-4"
            >
              <div className="flex flex-col items-start space-y-3">
                <div className="flex w-full items-center space-x-3">
                  <Image
                    src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                    alt="User"
                    width={36}
                    height={36}
                    className="size-9 rounded-full"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium text-gray-800 sm:text-sm">
                      Sir 1
                    </p>
                    <p className="truncate text-xs text-gray-600">
                      Chemistry | Level 3
                    </p>
                  </div>
                </div>

                <div className="w-full border-t border-gray-200"></div>

                <button className="w-full cursor-pointer truncate text-left text-xs text-gray-700 hover:text-gray-900 sm:text-sm">
                  Profile Settings
                </button>
                <button className="w-full cursor-pointer truncate text-left text-xs text-gray-700 hover:text-gray-900 sm:text-sm">
                  Account
                </button>
                <button className="w-full cursor-pointer truncate text-left text-xs text-red-600 hover:text-red-800 sm:text-sm">
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
