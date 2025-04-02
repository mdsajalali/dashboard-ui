import {
  Folder,
  FileText,
  Eye,
  ChevronDown,
  ChevronUp,
  BadgeInfo,
  Info,
} from "lucide-react";

interface FileType {
  name: string;
  type: string;
  created: string;
  createdBy: string;
  lastModified: string;
  lastModifiedBy: string;
  kind: string;
  size: string;
  visibility: string;
}

export default function FileDetails() {
  const files: FileType[] = [
    {
      name: "Chapter_1.1",
      type: "folder",
      created: "25/02/2025 10:35 pm",
      createdBy: "Sir",
      lastModified: "Friday, 25/02/2025, 10:35 pm",
      lastModifiedBy: "Sir",
      kind: "PDF Document",
      size: "23 MB",
      visibility:
        "Batch 1, Batch 2, Batch 3, For both online & physical students",
    },
  ];

  return (
    <div className="px-2 lg:px-4">
      <div className="flex items-center justify-center">
        <div className="w-full   border border-gray-300">
          {files.map((file, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 xl:grid-cols-12 gap-4 ${
                index !== files.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="col-span-12 xl:col-span-9  p-4  flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-5 w-5 text-blue-600 border-gray-300 rounded"
                    />
                    {file.type === "folder" ? (
                      <Folder className="h-6 w-6 text-gray-600" />
                    ) : (
                      <FileText className="h-6 w-6 text-gray-600" />
                    )}
                    <span className="text-gray-800 font-medium underline">
                      {file.name}
                    </span>
                    <ChevronUp />
                  </div>
                  <div className="lg:flex hidden items-center space-x-2">
                    <button className="p-1 hidden lg:block">
                      <BadgeInfo
                        size={20}
                        className="text-gray-600 cursor-pointer"
                      />
                    </button>
                    <div className="relative w-full md:w-auto">
                      <Eye className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
                      <select className="border-0 outline-0 bg-gray-100 cursor-pointer rounded-md pl-10 pr-10 py-2 text-sm text-black w-full appearance-none">
                        <option>Access to</option>
                        <option>View Only</option>
                        <option>Delete</option>
                        <option>Update</option>
                        <option>Active</option>
                        <option>Disable</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                    </div>
                    <div className="relative w-full md:w-auto">
                      <select className="border-0 outline-0 bg-gray-100 cursor-pointer rounded-md px-3 pr-10 py-2 text-sm text-black w-full appearance-none">
                        <option>Actions</option>
                        <option>Delete</option>
                        <option>Update</option>
                        <option>Active</option>
                        <option>Disable</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div className="text-sm   mt-auto xl:text-end text-center">
                  <p>
                    <span className="font-medium">Visible to:</span>{" "}
                    {file.visibility}
                  </p>
                </div>
              </div>
              <div className="col-span-12  p-4 xl:col-span-3 text-sm   space-y-1 lg:border-l-2 border-gray-300 sm:pl-5">
                <p>
                  <span className="font-medium">Created on:</span>{" "}
                  {file.created}
                </p>
                <p>
                  <span className="font-medium">Created by:</span>{" "}
                  {file.createdBy}
                </p>
                <p>
                  <span className="font-medium">Last Modified:</span>{" "}
                  {file.lastModified}
                </p>
                <p>
                  <span className="font-medium">Last Modified by:</span>{" "}
                  {file.lastModifiedBy}
                </p>
                <p>
                  <span className="font-medium">Kind:</span> {file.kind}
                </p>
                <p>
                  <span className="font-medium">Size:</span> {file.size}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between space-x-2 flex-wrap gap-2 w-full  border-x border-b  border-gray-300 p-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-5 w-5 text-blue-600 border-gray-300 rounded"
          />
          <Folder className="lg:h-10 h-8 lg:w-10 w-8 text-gray-600" />
          <span className="text-gray-800 font-medium ">
            Chapter 2 revision notes.pdf
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 lg:block hidden">
            <Info size={16} className="text-gray-600 cursor-pointer" />
          </button>

          <div className="relative w-full md:w-auto">
            <Eye className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />

            <select className="border-0 outline-0 bg-gray-100 cursor-pointer rounded-md pl-10 pr-10 py-2 text-sm text-black w-full appearance-none z-[9]">
              <option>Access to</option>
              <option>View Only</option>
              <option>Delete</option>
              <option>Update</option>
              <option>Active</option>
              <option>Disable</option>
            </select>

            {/* Chevron Down Icon Positioned on the Right */}
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
          </div>

          <div className="relative w-full md:w-auto">
            <select className="border-0 outline-0 bg-gray-100 cursor-pointer rounded-md px-3 pr-10 py-2 text-sm text-black w-full appearance-none z-[9]">
              <option>Actions</option>
              <option>Delete</option>
              <option>Update</option>
              <option>Active</option>
              <option>Disable</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
