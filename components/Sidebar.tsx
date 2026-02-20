
import React from 'react';
import { AppSection } from '../types.ts';

interface SidebarProps {
  activeSection: AppSection;
  onSelect: (section: AppSection) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSelect }) => {
  const navItems: { id: AppSection; icon: string; label: string }[] = [
    { id: 'locations', icon: 'fa-map-marked-alt', label: 'Locations' },
    { id: 'guests', icon: 'fa-users', label: 'Guest List' },
    { id: 'chat', icon: 'fa-comments', label: 'Client Chat' },
    { id: 'team', icon: 'fa-map-pin', label: 'Team Tracker' },
    { id: 'music', icon: 'fa-music', label: 'Music & Bands' },
    { id: 'catering', icon: 'fa-utensils', label: 'Catering' },
    { id: 'theme', icon: 'fa-palette', label: 'Themes & Decor' },
    { id: 'budget', icon: 'fa-wallet', label: 'Budget' },
  ];

  return (
    <div className="w-64 bg-[#F5F1EB] h-screen fixed left-0 top-0 border-r border-[#D7CCC8] flex flex-col p-6 shadow-sm">
      <div className="mb-10">
        <h1 className="text-3xl font-serif text-[#3E2723] tracking-tight">Elegance</h1>
        <p className="text-xs uppercase tracking-widest text-[#8D6E63] font-medium">Event Planning Suite</p>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeSection === item.id
                ? 'bg-[#3E2723] text-white shadow-md'
                : 'text-[#5D4037] hover:bg-[#EAE2D6]'
            }`}
          >
            <i className={`fas ${item.icon} w-5`}></i>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-[#D7CCC8]">
        <div className="flex items-center space-x-3 text-[#5D4037]">
          <div className="w-10 h-10 rounded-full bg-[#8D6E63] flex items-center justify-center text-white">
            <i className="fas fa-user-tie"></i>
          </div>
          <div>
            <p className="text-sm font-semibold">Alex Planner</p>
            <p className="text-xs opacity-70">Senior Agent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
