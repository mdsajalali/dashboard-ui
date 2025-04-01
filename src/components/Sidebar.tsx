import { SidebarProps } from "@/types/main.types";
import { ArrowLeft, ChevronDown } from "lucide-react";

const Sidebar = ({
  isSidebarOpen,
  handleDropdownToggle,
  openDropdown,
}: SidebarProps) => {
  return (
    <aside
      className={`bg-white shadow-md fixed inset-y-0 left-0 z-[99] w-64 md:w-72 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out pt-[60px] overflow-y-auto`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between space-x-2   ">
          <span className="text-sm font-medium">Teach</span>
          <button className="p-2 rounded-full  bg-black cursor-pointer">
            <ArrowLeft size={20} className="text-white" />
          </button>
        </div>
      </div>
      <nav className="flex flex-col h-[calc(100vh-128px)]">
        <div>
          <ul>
            <li className="px-4 py-2   hover:bg-gray-100 cursor-pointer">
              Dashboard
            </li>
            <li>
              <button
                onClick={() => handleDropdownToggle("resources")}
                className="w-full flex items-center justify-between px-4 py-2   hover:bg-gray-100 cursor-pointer"
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
                  <li className="py-1   pl-8 hover:bg-gray-100 cursor-pointer">
                    All Batches
                  </li>
                  <li className="py-1   pl-8 hover:bg-gray-100 cursor-pointer">
                    Resources
                  </li>
                </ul>
              )}
            </li>
            <li className="px-4 py-2   hover:bg-gray-100 cursor-pointer">
              My Earnings
            </li>

            <li className="px-4 py-2   hover:bg-gray-100 cursor-pointer">
              Timetable
            </li>
            <li className="px-4 py-2   hover:bg-gray-100 cursor-pointer">
              Analytics
            </li>
          </ul>
        </div>
        {/* Bottom Section */}
        <div className="mt-auto">
          <ul>
            <li className="px-4 py-2  hover:bg-gray-100 cursor-pointer">
              Manage Profile
            </li>
            <li className="px-4 py-2  hover:bg-gray-100 cursor-pointer">
              Settings
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
