import { SidebarProps } from "@/types/main.types";
import { ChevronDown, ChevronLeft } from "lucide-react";



const Sidebar = ({
  isSidebarOpen,
  handleDropdownToggle,
  openDropdown,
}: SidebarProps) => {
  return (
    <aside
      className={`bg-white shadow-md fixed inset-y-0 left-0 z-20 w-64 md:w-72 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out pt-16 overflow-y-auto`}
    >
      <div className="p-4">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
          <ChevronLeft size={20} />
          <span className="text-sm font-medium">Manage Batch</span>
        </button>
      </div>
      <nav className="flex flex-col h-[calc(100vh-120px)]">
        <div>
          <div className="px-4 py-2 bg-blue-100 text-blue-600 text-sm font-medium">
            ALL BATCHES
          </div>
          <ul className="mt-2">
            <li>
              <button
                onClick={() => handleDropdownToggle("resources")}
                className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                <span>Resources</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "resources" && (
                <ul className="pl-8">
                  <li className="py-1 text-gray-600 hover:bg-gray-100 cursor-pointer">
                    Study Materials
                  </li>
                  <li className="py-1 text-gray-600 hover:bg-gray-100 cursor-pointer">
                    Videos
                  </li>
                  <li className="py-1 text-gray-600 hover:bg-gray-100 cursor-pointer">
                    Quizzes
                  </li>
                </ul>
              )}
            </li>
            <li className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
              My Earnings
            </li>
            <li>
              <button
                onClick={() => handleDropdownToggle("timetable")}
                className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                <span>Timetable</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openDropdown === "timetable" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "timetable" && (
                <ul className="pl-8">
                  <li className="py-1 text-gray-600 hover:bg-gray-100 cursor-pointer">
                    Weekly Schedule
                  </li>
                  <li className="py-1 text-gray-600 hover:bg-gray-100 cursor-pointer">
                    Exam Dates
                  </li>
                </ul>
              )}
            </li>
            <li className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
              Analytics
            </li>
          </ul>
        </div>
        {/* Bottom Section */}
        <div className="mt-auto">
          <ul>
            <li className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
              Manage Profile
            </li>
            <li className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
              Settings
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
