import {
  Eye,
  Info,
  Plus,
  Search,
  MoreHorizontal,
  SquarePen,
  ArrowLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import FileManagerButtons from "./FileManagerButtons";
import { useState } from "react";
import FileDetails from "./FileDetails";
import ConfirmationModal from "./ConfirmationModal";

const TabContent = ({ activeTab }: { activeTab: string }) => {
  const [breadcrumb, setBreadcrumb] = useState("Content");

  const breadcrumbItems = ["Content", "Course Details", "Revision"];

  return (
    <>
      {activeTab === "Materials" && (
        <div className="mt-6 rounded-md bg-white p-4">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center justify-between gap-5 space-x-2 border-b border-black/40">
            <div className="flex items-center gap-4 lg:gap-10">
              {breadcrumbItems.map((item) => (
                <button
                  key={item}
                  className={`cursor-pointer border-b-2 px-2 pb-3 text-[16px] ${
                    breadcrumb === item
                      ? "border-b-4 border-black font-semibold"
                      : "border-transparent text-gray-600"
                  }`}
                  onClick={() => setBreadcrumb(item)}
                >
                  {item}
                </button>
              ))}
              <div className="-mt-2 hidden cursor-pointer items-center gap-2 lg:flex">
                <div className="rounded-full bg-black p-[2px] text-white">
                  <Plus size={16} />
                </div>
                <h2 className="text-[14px] text-gray-400 italic">
                  Add main Folder
                </h2>
              </div>
            </div>
            <div className="hidden items-center gap-5 lg:flex">
              <div className="relative">
                <input
                  type="text"
                  className="w-36 rounded-lg border pl-6 text-sm outline-0 focus:outline-none"
                />
                <Search
                  size={16}
                  className="absolute top-1/2 left-1 -translate-y-1/2 transform"
                />
              </div>
              <div className="flex items-center gap-2">
                <button className="h-5 w-5 cursor-pointer rounded-full border">
                  <MoreHorizontal size={19} className="text-gray-600" />
                </button>
                <SquarePen size={19} className="cursor-pointer" />
              </div>
              {/* Confirmation Modal */}
              <ConfirmationModal textColor={true} />
              <div className="flex cursor-pointer items-center">
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
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 7L12 3L16 7"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 17L12 21L16 17"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 7L12 3L16 7"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 17L12 21L16 17"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <svg
                className="cursor-pointer"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6 12H20"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6 18H20"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {breadcrumb === "Content" && (
            <>
              {/* Folder and File List */}
              <div className="mb-4 flex flex-col items-start justify-between space-y-3 md:flex-row md:items-center md:space-y-0">
                <div className="flex items-center space-x-2">
                  <button className="cursor-pointer rounded-full bg-black p-2">
                    <ArrowLeft size={20} className="text-white" />
                  </button>
                  <span className="cursor-pointer text-[16px] font-medium text-gray-800 underline">
                    Chapter
                  </span>
                  <ChevronRight size={22} className="cursor-pointer" />
                  <span className="cursor-pointer text-[16px] font-medium text-gray-800 underline">
                    Chapter 1.1
                  </span>
                  <ChevronRight size={22} className="cursor-pointer" />
                  <div className="hidden items-center gap-2 rounded-md bg-gray-100 px-4 py-2 lg:flex">
                    <input type="checkbox" className="mt-1" />
                    <p className="text-[16px] font-bold text-gray-800">
                      Chapter 1
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 space-x-2">
                  <button className="hidden p-1 lg:block">
                    <Info size={16} className="cursor-pointer text-gray-600" />
                  </button>

                  <div className="relative w-full md:w-auto">
                    <Eye className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-600" />

                    <select className="z-[9] w-full cursor-pointer appearance-none rounded-md border-0 bg-gray-100 py-2 pr-10 pl-10 text-sm text-black outline-0">
                      <option>Access to</option>
                      <option>View Only</option>
                      <option>Delete</option>
                      <option>Update</option>
                      <option>Active</option>
                      <option>Disable</option>
                    </select>

                    {/* Chevron Down Icon Positioned on the Right */}
                    <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  </div>

                  <div className="relative w-full md:w-auto">
                    <select className="z-[9] w-full cursor-pointer appearance-none rounded-md border-0 bg-gray-100 px-3 py-2 pr-10 text-sm text-black outline-0">
                      <option>Actions</option>
                      <option>Delete</option>
                      <option>Update</option>
                      <option>Active</option>
                      <option>Disable</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
              </div>
              {/* File Details */}
              <FileDetails />
            </>
          )}

          {breadcrumb === "Course Details" && (
            <div className="my-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Course Details
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Content for Course Details will go here.
              </p>
            </div>
          )}

          {breadcrumb === "Revision" && (
            <div className="my-6">
              <h2 className="text-lg font-semibold text-gray-800">Revision</h2>
              <p className="mt-2 text-sm text-gray-600">
                Content for Revision will go here.
              </p>
            </div>
          )}
          {/* File Manager Buttons */}
          <div className="mx-4 border-gray-300 lg:border-x lg:border-b">
            <FileManagerButtons />
          </div>
        </div>
      )}
    </>
  );
};

export default TabContent;
