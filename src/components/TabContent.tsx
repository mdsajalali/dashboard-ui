import {
  Folder,
  FileText,
  Eye,
  Info,
  Plus,
  Search,
  MoreHorizontal,
  SquarePen,
  Trash2,
} from "lucide-react";
import FileManagerButtons from "./FileManagerButtons";
import { useState } from "react";

const TabContent = ({ activeTab }: { activeTab: string }) => {
  const [breadcrumb, setBreadcrumb] = useState("Content");

  const breadcrumbItems = ["Content", "Course Details", "Revision"];

  return (
    <>
      {activeTab === "Materials" && (
        <div className="mt-6 bg-white p-4 rounded-md">
          {/* Breadcrumb */}
          <div className="flex border-b border-black/40 items-center justify-between space-x-2 mb-4   gap-5">
            <div className="flex items-center gap-10">
              {breadcrumbItems.map((item) => (
                <button
                  key={item}
                  className={`text-[16px] px-2   pb-3   border-b-2 ${
                    breadcrumb === item
                      ? "border-black  border-b-4 font-semibold"
                      : "border-transparent text-gray-600"
                  }`}
                  onClick={() => setBreadcrumb(item)}
                >
                  {item}
                </button>
              ))}
              <div className="lg:flex hidden -mt-2 items-center gap-2">
                <div className="bg-black p-[2px] rounded-full text-white">
                  <Plus size={16} />
                </div>
                <h2 className="text-[14px] italic text-gray-400">
                  Add main Folder
                </h2>
              </div>
            </div>
            <div className="lg:flex items-center hidden gap-5">
              <div className="relative ">
                <input
                  type="text"
                  className="pl-6 w-36 text-sm  border outline-0   rounded-lg   focus:outline-none    "
                />
                <Search
                  size={16}
                  className="absolute left-1 top-1/2 transform -translate-y-1/2  "
                />
              </div>
              <div className="flex items-center gap-2">
                <button className=" w-5 h-5  cursor-pointer  border rounded-full">
                  <MoreHorizontal size={19} className="text-gray-600" />
                </button>
                <SquarePen size={19} className="  cursor-pointer" />
              </div>
              <Trash2 size={19} className="  cursor-pointer" />
              <div className="flex items-center cursor-pointer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3L12 21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8 7L12 3L16 7"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 17L12 21L16 17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  className="-ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3L12 21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8 7L12 3L16 7"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 17L12 21L16 17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <svg className="cursor-pointer"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="6" r="2" fill="black" />
                <circle cx="4" cy="12" r="2" fill="black" />
                <circle cx="4" cy="18" r="2" fill="black" />
                <path
                  d="M6 6H20"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M6 12H20"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M6 18H20"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>

          {breadcrumb === "Content" && (
            <>
              {/* Folder and File List */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 space-y-3 md:space-y-0">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4 text-blue-600" />
                  <Folder size={20} className="text-gray-600" />
                  <span className="text-sm text-gray-800">Chapter 1.1</span>
                </div>
                <div className="flex items-center space-x-2 flex-wrap gap-2">
                  <button className="p-1">
                    <Info size={16} className="text-gray-600" />
                  </button>
                  <button className="p-1">
                    <Eye size={16} className="text-gray-600" />
                  </button>
                  <select className="border rounded-md px-2 py-1 text-sm text-gray-600">
                    <option>Access to</option>
                  </select>
                  <select className="border rounded-md px-2 py-1 text-sm text-gray-600">
                    <option>Actions</option>
                  </select>
                </div>
              </div>
              {/* File Details */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 border p-4 rounded-md space-y-3 md:space-y-0">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4 text-blue-600" />
                  <FileText size={20} className="text-gray-600" />
                  <span className="text-sm text-gray-800">
                    Chapter 2 revision notes.pdf
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Created on: 25/02/2025 10:35 pm</p>
                  <p>Created by: Sir</p>
                  <p>Last Modified: Friday, 25/02/2025, 10:35 pm</p>
                  <p>Last Modified by: Sir</p>
                  <p>Kind: PDF Document</p>
                  <p>Size: 23 MB</p>
                  <p className="text-xs text-gray-500">
                    Visible to Batch 1, Batch 2, Batch 3. For both online &
                    physical students
                  </p>
                </div>
                <div className="flex items-center space-x-2 flex-wrap gap-2">
                  <button className="p-1">
                    <Info size={16} className="text-gray-600" />
                  </button>
                  <button className="p-1">
                    <Eye size={16} className="text-gray-600" />
                  </button>
                  <select className="border rounded-md px-2 py-1 text-sm text-gray-600">
                    <option>Access to</option>
                  </select>
                  <select className="border rounded-md px-2 py-1 text-sm text-gray-600">
                    <option>Actions</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {breadcrumb === "Course Details" && (
            <div className="my-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Course Details
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Content for Course Details will go here.
              </p>
            </div>
          )}

          {breadcrumb === "Revision" && (
            <div className="my-6">
              <h2 className="text-lg font-semibold text-gray-800">Revision</h2>
              <p className="text-sm text-gray-600 mt-2">
                Content for Revision will go here.
              </p>
            </div>
          )}
          {/* File Manager Buttons */}
          <FileManagerButtons />
        </div>
      )}
    </>
  );
};

export default TabContent;
