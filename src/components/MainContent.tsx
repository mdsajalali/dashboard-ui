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
    <main className="ml-0 h-[calc(100vh-4rem)] flex-1 overflow-y-auto p-4 md:p-6 lg:ml-72">
      {/* Course Selection */}
      <CourseSelection />

      {/* Progress Bar */}
      <ProgressBar />

      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-black/40 px-4 pt-4">
        <nav className="flex space-x-6 overflow-x-auto">
          {tabs.map((tab: string) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-3 text-sm font-medium whitespace-nowrap ${
                activeTab === tab
                  ? "border-b-4 border-blue-900 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="mt-1 h-5 w-5 cursor-pointer rounded-full border">
            <MoreHorizontal size={19} className="text-gray-600" />
          </button>
        </nav>
        <div className="-mt-[10px hidden items-center gap-3 lg:flex">
          {/* Confirmation Modal */}
          <ConfirmationModal />
          <Download
            size={20}
            className="cursor-pointer text-gray-500 hover:text-gray-600"
          />
        </div>
      </div>

      {/* Tab Content */}
      <TabContent activeTab={activeTab} />

      {/* Placeholder for other tabs */}
      {activeTab !== "Materials" && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">{activeTab}</h2>
          <p className="mt-2 text-sm text-gray-600">
            Content for {activeTab} will go here.
          </p>
        </div>
      )}
    </main>
  );
};

export default MainContent;
