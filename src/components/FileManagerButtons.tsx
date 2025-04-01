import { PlusCircle, Upload, File, Text, Clipboard } from "lucide-react";

const FileManagerButtons = () => {
  return (
    <div className=" grid grid-cols-5 gap-10 px-10">
      <button className="flex items-center space-x-2 border-2 border-dashed rounded-md px-6 py-4 text-sm  ">
        <div className="p-1 rounded-full  bg-black text-white">
          <PlusCircle size={20} />
        </div>
        <span>Add Folder</span>
      </button>
      <button className="flex items-center space-x-2 border-2 border-dashed rounded-md px-6 py-4 text-sm ">
        <Upload size={20} />
        <span>Upload File</span>
      </button>
      <button className="flex items-center space-x-2 border-2 border-dashed rounded-md px-6 py-4 text-sm ">
        <File size={20} />
        <span>Upload Folder</span>
      </button>
      <button className="flex items-center space-x-2 border-2 border-dashed rounded-md px-6 py-4 text-sm ">
        <Text size={20} />
        <span>Add Text</span>
      </button>
      <button className="flex items-center space-x-2 border-2 border-dashed rounded-md px-6 py-4 text-sm ">
        <Clipboard size={20} />
        <span>Paste</span>
      </button>
    </div>
  );
};

export default FileManagerButtons;
