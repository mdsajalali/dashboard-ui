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
        <div className="w-full border border-gray-300">
          {files.map((file, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 gap-4 xl:grid-cols-12 ${
                index !== files.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="col-span-12 flex flex-col space-y-3 p-4 xl:col-span-9">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-gray-300 text-blue-600"
                    />
                    {file.type === "folder" ? (
                      <Folder className="h-6 w-6 text-gray-600" />
                    ) : (
                      <FileText className="h-6 w-6 text-gray-600" />
                    )}
                    <span className="font-medium text-gray-800 underline">
                      {file.name}
                    </span>
                    <ChevronUp />
                  </div>
                  <div className="hidden items-center space-x-2 lg:flex">
                    <button className="hidden p-1 lg:block">
                      <BadgeInfo
                        size={20}
                        className="cursor-pointer text-gray-600"
                      />
                    </button>
                    <div className="relative w-full md:w-auto">
                      <Eye className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-600" />
                      <select className="w-full cursor-pointer appearance-none rounded-md border-0 bg-gray-100 py-2 pr-10 pl-10 text-sm text-black outline-0">
                        <option>Access to</option>
                        <option>View Only</option>
                        <option>Delete</option>
                        <option>Update</option>
                        <option>Active</option>
                        <option>Disable</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    </div>
                    <div className="relative w-full md:w-auto">
                      <select className="w-full cursor-pointer appearance-none rounded-md border-0 bg-gray-100 px-3 py-2 pr-10 text-sm text-black outline-0">
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
                <div className="mt-auto text-center text-sm xl:text-end">
                  <p>
                    <span className="font-medium">Visible to:</span>{" "}
                    {file.visibility}
                  </p>
                </div>
              </div>
              <div className="col-span-12 space-y-1 border-gray-300 p-4 text-sm sm:pl-5 lg:border-l-2 xl:col-span-3">
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
      <div className="flex w-full flex-wrap items-center justify-between gap-2 space-x-2 border-x border-b border-gray-300 p-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-gray-300 text-blue-600"
          />
          <Folder className="h-8 w-8 text-gray-600 lg:h-10 lg:w-10" />
          <span className="font-medium text-gray-800">
            Chapter 2 revision notes.pdf
          </span>
        </div>
        <div className="flex items-center gap-2">
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
    </div>
  );
}
