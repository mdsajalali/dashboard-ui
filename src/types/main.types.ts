// Define the props interface for the Sidebar component
export interface SidebarProps {
  isSidebarOpen: boolean;
  handleDropdownToggle: (dropdown: string) => void;
  openDropdown: string | null;
}

// Define the props interface for the Header component
export interface HeaderProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
  isSidebarOpen: boolean;
}

// Define the props interface for the MainContent component
export interface MainContentProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}
