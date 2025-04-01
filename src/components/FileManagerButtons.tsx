import { PlusCircle, Upload, File, Text, Clipboard } from "lucide-react";

const FileManagerButtons = () => {
  return (
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
  );
};

export default FileManagerButtons;
