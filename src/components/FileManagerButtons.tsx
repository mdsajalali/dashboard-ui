import { PlusCircle, Upload, File, Text, Clipboard } from "lucide-react";

const FileManagerButtons = () => {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-10 lg:px-10 px-4">
      <button className="flex items-center space-x-2 border-2 border-dashed rounded-md px-2 lg:px-6 py-3 lg:py-4 text-sm  ">
        <div className="p-1 rounded-full  bg-black text-white">
          <PlusCircle size={20} />
        </div>
        <span>Add Folder</span>
      </button>
      <button className="flex items-center space-x-2 border-2 border-dashed rounded-md px-2 lg:px-6 py-3 lg:py-4 text-sm ">
        <div className="p-1 rounded-full  bg-black text-white">
          <Upload size={20} />
        </div>
        <span>Upload File</span>
      </button>
      <button className="flex items-center space-x-2 border-2 border-dashed rounded-md px-2 lg:px-6 py-3 lg:py-4 text-sm ">
        <div className="p-1 rounded-full  bg-black text-white">
          <File size={20} />
        </div>
        <span>Upload Folder</span>
      </button>
      <button className="flex items-center space-x-2 border-2 border-dashed rounded-md px-2 lg:px-6 py-3 lg:py-4 text-sm ">
        <div className="p-1 rounded-full  bg-black text-white">
          <Text size={20} />
        </div>
        <span>Add Text</span>
      </button>
      <button className="flex items-center  space-x-2 border-2 border-dashed rounded-md px-2 lg:px-6 py-3 lg:py-4 text-sm ">
        <div className="p-1 rounded-full  bg-black text-white">
          <Clipboard size={20} />
        </div>
        <span>Paste</span>
      </button>
    </div>
  );
};

export default FileManagerButtons;
