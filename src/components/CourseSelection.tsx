import { Book, ChevronDown } from "lucide-react";
import Image from "next/image";

const CourseSelection = () => {
  return (
    <div className="flex    flex-col md:flex-row items-start md:items-center justify-between   space-y-3 md:space-y-0">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-3 w-full md:w-auto">
        <div className="relative w-full md:w-auto">
          <select className="cursor-pointer rounded-md px-3 pr-10 bg-white outline-0 border-0 py-2 text-sm text-black w-full appearance-none z-[9]">
            <option>Course for Chemistry</option>
            <option>Course for Physics</option>
            <option>Course for Mathematics</option>
            <option>Course for Biology</option>
            <option>Course for Computer Science</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
        </div>
        <div className="border-l h-8 lg:block hidden "></div>

        <div className="relative w-full md:w-auto">
          <select className="border-0 outline-0 bg-white cursor-pointer rounded-md px-3 pr-10 py-2 text-sm text-black w-full appearance-none z-[9]">
            <option>All Batches</option>
            <option>Batch A</option>
            <option>Batch B</option>
            <option>Batch C</option>
            <option>Batch D</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
        </div>
      </div>
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <button className="bg-black text-white px-3 py-2 rounded-md text-sm w-[170px] md:w-auto flex items-center gap-2">
          <Book className="w-4 h-4" />
          Take Class
        </button>
        <button className="flex  items-center space-x-2   rounded-md px-3 py-2  text-sm text-gray-600 w-full md:w-auto">
          <Image
            src="https://thumbs.dreamstime.com/b/d-icon-avatar-cute-smiling-woman-cartoon-hipster-character-people-close-up-portrait-isolated-transparent-png-background-352288997.jpg"
            alt="User"
            width={35}
            height={35}
            className="size-[35px] z-[9] bg-gray-300   rounded-full cursor-pointer"
          />
          <Image
            src="https://img.freepik.com/premium-vector/boy-with-blue-hoodie-blue-hoodie-with-hoodie-it_1230457-42660.jpg?semt=ais_hybrid"
            alt="User"
            width={35}
            height={35}
            className="size-[35px]   cursor-pointer  -ml-[22px] z-[9] bg-black rounded-full"
          />
          <span className="bg-white -ml-[54px] pl-14 pr-3  py-2 rounded-md">
            Add TA
          </span>
        </button>
      </div>
    </div>
  );
};

export default CourseSelection;
