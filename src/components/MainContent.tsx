import { MainContentProps } from "@/types/main.types";
import { MoreHorizontal, Download } from "lucide-react";
import CourseSelection from "./CourseSelection";
import ProgressBar from "./ProgressBar";
import TabContent from "./TabContent";
import ConfirmationModal from "./ConfirmationModal";

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
    <main className="flex-1 ml-0  lg:ml-72 p-4 md:p-6 overflow-y-auto h-[calc(100vh-4rem)]">
      {/* Course Selection */}
      <CourseSelection />

      {/* Progress Bar */}
      <ProgressBar />

      {/* Tabs */}
      <div className="border-b flex items-center justify-between border-black/40 pt-4 px-4">
        <nav className="flex space-x-6 overflow-x-auto">
          {tabs.map((tab: string) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 cursor-pointer text-sm font-medium whitespace-nowrap ${
                activeTab === tab
                  ? "text-blue-600 border-b-4 border-blue-900"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
          <button className=" w-5 h-5 mt-1 cursor-pointer  border rounded-full">
            <MoreHorizontal size={19} className="text-gray-600" />
          </button>
        </nav>
        <div className="lg:flex hidden items-center gap-3 -mt-[10px">
          {/* Confirmation Modal */}
          <ConfirmationModal />
          <Download
            size={20}
            className="text-gray-500 cursor-pointer hover:text-gray-600"
          />
        </div>
      </div>

      {/* Tab Content */}
      <TabContent activeTab={activeTab} />

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
