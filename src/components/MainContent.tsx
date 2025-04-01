import { MainContentProps } from "@/types/main.types";
import {
  ChevronRight,
  Folder,
  FileText,
  Eye,
  Info,
  MoreHorizontal,
  Trash2,
  Download,
} from "lucide-react";
import FileManagerButtons from "./FileManagerButtons";
import CourseSelection from "./CourseSelection";
import ProgressBar from "./ProgressBar";

const tabs: string[] = [
  "Students",
  "Announcements",
  "Materials",
  "Homework",
  "Attendance",
  "Discussion",
];

const MainContent = ({ setActiveTab, activeTab }: MainContentProps) => {
  return (
    <main className="flex-1 ml-0 md:ml-64 lg:ml-72 p-4 md:p-6 overflow-y-auto h-[calc(100vh-4rem)]">
      {/* Course Selection */}
      <CourseSelection />

      {/* Progress Bar */}
      <ProgressBar />

      {/* Tabs */}
      <div className="border-b flex items-center justify-between border-black/40 pt-4 px-4">
        <nav className="flex space-x-6 overflow-x-auto">
          {tabs.map((tab: string) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 cursor-pointer text-sm font-medium whitespace-nowrap ${
                activeTab === tab
                  ? "text-blue-600 border-b-4 border-blue-900"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
          <button className=" w-5 h-5 mt-1 cursor-pointer  border rounded-full">
            <MoreHorizontal size={19} className="text-gray-600" />
          </button>
        </nav>
        <div className="lg:flex hidden items-center gap-3 -mt-[10px">
          <Trash2 size={20} className="text-gray-500 cursor-pointer hover:text-gray-600" />
          <Download size={20} className="text-gray-500 cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "Materials" && (
        <div className="mt-6 bg-white p-4 rounded-md">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-4 flex-wrap">
            <span className="text-sm text-gray-600">Content</span>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-sm text-gray-600">Chapter 1</span>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-sm text-gray-600">Chapter 1.1</span>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-sm text-gray-600">Chapter 1</span>
          </div>

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
                Visible to Batch 1, Batch 2, Batch 3. For both online & physical
                students
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

          {/* File Manager Buttons */}
          <FileManagerButtons />
        </div>
      )}

      {/* Placeholder for other tabs */}
      {activeTab !== "Materials" && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">{activeTab}</h2>
          <p className="text-sm text-gray-600 mt-2">
            Content for {activeTab} will go here.
          </p>
        </div>
      )}
    </main>
  );
};

export default MainContent;
