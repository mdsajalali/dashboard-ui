import { SidebarProps } from "@/types/main.types";
import { ArrowLeft, ChevronDown } from "lucide-react";

const Sidebar = ({
  isSidebarOpen,
  handleDropdownToggle,
  openDropdown,
}: SidebarProps) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-[99] w-64 transform bg-white shadow-md lg:w-72 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } overflow-y-auto pt-[60px] transition-transform duration-300 ease-in-out lg:translate-x-0`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between space-x-2">
          <span className="text-sm font-medium">Teach</span>
          <button className="cursor-pointer rounded-full bg-black p-2">
            <ArrowLeft size={20} className="text-white" />
          </button>
        </div>
      </div>
      <nav className="flex h-[calc(100vh-128px)] flex-col">
        <div>
          <ul>
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              Dashboard
            </li>
            <li>
              <button
                onClick={() => handleDropdownToggle("resources")}
                className="flex w-full cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-100"
              >
                <span>Manage Batch</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "resources" && (
                <ul>
                  <li className="cursor-pointer py-1 pl-8 hover:bg-gray-100">
                    All Batches
                  </li>
                  <li className="cursor-pointer py-1 pl-8 hover:bg-gray-100">
                    Resources
                  </li>
                </ul>
              )}
            </li>
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              My Earnings
            </li>

            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              Timetable
            </li>
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              Analytics
            </li>
          </ul>
        </div>
        {/* Bottom Section */}
        <div className="mt-auto">
          <ul>
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              Manage Profile
            </li>
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              Settings
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
