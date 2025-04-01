import { MainContentProps } from "@/types/main.types";
import {
  ChevronRight,
  Folder,
  FileText,
  PlusCircle,
  Upload,
  File,
  Text,
  Clipboard,
  Eye,
  Info,
  MoreHorizontal,
} from "lucide-react";

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
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 space-y-3 md:space-y-0">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-3 w-full md:w-auto">
          <select className="border rounded-md px-3 py-2 text-sm text-gray-600 w-full md:w-auto">
            <option>Course for Chemistry</option>
          </select>
          <select className="border rounded-md px-3 py-2 text-sm text-gray-600 w-full md:w-auto">
            <option>All Batches</option>
          </select>
        </div>
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm w-full md:w-auto">
            Take Class
          </button>
          <button className="flex items-center space-x-2 border rounded-md px-3 py-2 text-sm text-gray-600 w-full md:w-auto">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <span>Add TA</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b">
        <nav className="flex space-x-6 overflow-x-auto">
          {tabs.map((tab: string) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium whitespace-nowrap ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="pb-2">
            <MoreHorizontal size={20} className="text-gray-600" />
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "Materials" && (
        <div className="mt-6">
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

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center space-x-2 border rounded-md px-4 py-2 text-sm text-gray-600">
              <PlusCircle size={20} />
              <span>Add Folder</span>
            </button>
            <button className="flex items-center space-x-2 border rounded-md px-4 py-2 text-sm text-gray-600">
              <Upload size={20} />
              <span>Upload File</span>
            </button>
            <button className="flex items-center space-x-2 border rounded-md px-4 py-2 text-sm text-gray-600">
              <File size={20} />
              <span>Upload Folder</span>
            </button>
            <button className="flex items-center space-x-2 border rounded-md px-4 py-2 text-sm text-gray-600">
              <Text size={20} />
              <span>Add Text</span>
            </button>
            <button className="flex items-center space-x-2 border rounded-md px-4 py-2 text-sm text-gray-600">
              <Clipboard size={20} />
              <span>Paste</span>
            </button>
          </div>
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
