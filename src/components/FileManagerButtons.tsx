import { PlusCircle, Upload, File, Text, Clipboard } from "lucide-react";

const FileManagerButtons = () => {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-10 lg:px-10 px-2 py-4 ">
      <button className="flex items-center space-x-2 border-2 border-dashed rounded-md px-2 lg:px-6 py-3 lg:py-4 text-sm  ">
        <div className="p-1 rounded-full cursor-pointer  bg-black text-white">
          <PlusCircle size={20} />
        </div>
        <span className="cursor-pointer">Add Folder</span>
      </button>
      <button className="flex items-center space-x-2 border-2 border-dashed rounded-md px-2 lg:px-6 py-3 lg:py-4 text-sm ">
        <div className="p-1 rounded-full cursor-pointer  bg-black text-white">
          <Upload size={20} />
        </div>
        <span className="cursor-pointer">Upload File</span>
      </button>
      <button className="flex items-center space-x-2 border-2 border-dashed rounded-md px-2 lg:px-6 py-3 lg:py-4 text-sm ">
        <div className="p-1 rounded-full  cursor-pointer bg-black text-white">
          <File size={20} />
        </div>
        <span className="cursor-pointer">Upload Folder</span>
      </button>
      <button className="flex items-center space-x-2 border-2 border-dashed rounded-md px-2 lg:px-6 py-3 lg:py-4 text-sm ">
        <div className="p-1 rounded-full  cursor-pointer bg-black text-white">
          <Text size={20} />
        </div>
        <span className="cursor-pointer">Add Text</span>
      </button>
      <button className="flex items-center  space-x-2 border-2 border-dashed rounded-md px-2 lg:px-6 py-3 lg:py-4 text-sm ">
        <div className="p-1 rounded-full  cursor-pointer bg-black text-white">
          <Clipboard size={20} />
        </div>
        <span className="cursor-pointer">Paste</span>
      </button>
    </div>
  );
};

export default FileManagerButtons;
