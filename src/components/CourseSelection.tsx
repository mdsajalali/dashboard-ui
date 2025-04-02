import { Book, ChevronDown } from "lucide-react";
import Image from "next/image";

const CourseSelection = () => {
  return (
    <div className="flex flex-col items-start justify-between space-y-3 md:flex-row md:items-center md:space-y-0">
      <div className="flex w-full flex-col items-start space-y-3 md:w-auto md:flex-row md:items-center md:space-y-0 md:space-x-3">
        <div className="relative w-full md:w-auto">
          <select className="z-[9] w-full cursor-pointer appearance-none rounded-md border-0 bg-white px-3 py-2 pr-10 text-sm text-black outline-0">
            <option>Course for Chemistry</option>
            <option>Course for Physics</option>
            <option>Course for Mathematics</option>
            <option>Course for Biology</option>
            <option>Course for Computer Science</option>
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </div>
        <div className="hidden h-8 border-l lg:block"></div>

        <div className="relative w-full md:w-auto">
          <select className="z-[9] w-full cursor-pointer appearance-none rounded-md border-0 bg-white px-3 py-2 pr-10 text-sm text-black outline-0">
            <option>All Batches</option>
            <option>Batch A</option>
            <option>Batch B</option>
            <option>Batch C</option>
            <option>Batch D</option>
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <div className="flex w-full items-center space-x-3 md:w-auto">
        <button className="flex w-[170px] items-center gap-2 rounded-md bg-black px-3 py-2 text-sm text-white md:w-auto">
          <Book className="h-4 w-4" />
          Take Class
        </button>
        <button className="flex w-full items-center space-x-2 rounded-md px-3 py-2 text-sm text-gray-600 md:w-auto">
          <Image
            src="https://thumbs.dreamstime.com/b/d-icon-avatar-cute-smiling-woman-cartoon-hipster-character-people-close-up-portrait-isolated-transparent-png-background-352288997.jpg"
            alt="User"
            width={35}
            height={35}
            className="z-[9] size-[35px] cursor-pointer rounded-full bg-gray-300"
          />
          <Image
            src="https://img.freepik.com/premium-vector/boy-with-blue-hoodie-blue-hoodie-with-hoodie-it_1230457-42660.jpg?semt=ais_hybrid"
            alt="User"
            width={35}
            height={35}
            className="z-[9] -ml-[22px] size-[35px] cursor-pointer rounded-full bg-black"
          />
          <span className="-ml-[54px] rounded-md bg-white py-2 pr-3 pl-14">
            Add TA
          </span>
        </button>
      </div>
    </div>
  );
};

export default CourseSelection;
