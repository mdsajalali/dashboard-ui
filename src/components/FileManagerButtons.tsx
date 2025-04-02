import { PlusCircle, Upload, File, Text, Clipboard } from "lucide-react";

const FileManagerButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-2 py-4 md:grid-cols-3 lg:grid-cols-4 lg:px-10 xl:grid-cols-5 xl:gap-10">
      <button className="flex items-center space-x-2 rounded-md border-2 border-dashed px-2 py-3 text-sm lg:px-6 lg:py-4">
        <div className="cursor-pointer rounded-full bg-black p-1 text-white">
          <PlusCircle size={20} />
        </div>
        <span className="cursor-pointer">Add Folder</span>
      </button>
      <button className="flex items-center space-x-2 rounded-md border-2 border-dashed px-2 py-3 text-sm lg:px-6 lg:py-4">
        <div className="cursor-pointer rounded-full bg-black p-1 text-white">
          <Upload size={20} />
        </div>
        <span className="cursor-pointer">Upload File</span>
      </button>
      <button className="flex items-center space-x-2 rounded-md border-2 border-dashed px-2 py-3 text-sm lg:px-6 lg:py-4">
        <div className="cursor-pointer rounded-full bg-black p-1 text-white">
          <File size={20} />
        </div>
        <span className="cursor-pointer">Upload Folder</span>
      </button>
      <button className="flex items-center space-x-2 rounded-md border-2 border-dashed px-2 py-3 text-sm lg:px-6 lg:py-4">
        <div className="cursor-pointer rounded-full bg-black p-1 text-white">
          <Text size={20} />
        </div>
        <span className="cursor-pointer">Add Text</span>
      </button>
      <button className="flex items-center space-x-2 rounded-md border-2 border-dashed px-2 py-3 text-sm lg:px-6 lg:py-4">
        <div className="cursor-pointer rounded-full bg-black p-1 text-white">
          <Clipboard size={20} />
        </div>
        <span className="cursor-pointer">Paste</span>
      </button>
    </div>
  );
};

export default FileManagerButtons;
