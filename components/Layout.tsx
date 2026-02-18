
import React from 'react';
import Sidebar from './Sidebar';
import { AppSection } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: AppSection;
  setActiveSection: (section: AppSection) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeSection, setActiveSection }) => {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Sidebar activeSection={activeSection} onSelect={setActiveSection} />
      <main className="ml-64 p-10 max-w-7xl">
        {children}
      </main>
    </div>
  );
};

export default Layout;
