
import React from 'react';
import { INITIAL_TEAM } from '../constants.tsx';

const TeamTracker: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-4xl font-serif text-[#3E2723]">Team Localization</h2>
        <p className="text-[#8D6E63] mt-1">Real-time GPS tracking of field members across Paris.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-[600px]">
        {/* Mock Map */}
        <div className="lg:col-span-3 bg-[#EAE2D6] rounded-3xl relative overflow-hidden border border-[#D7CCC8] shadow-inner">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2D241E" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Mock Markers */}
          {INITIAL_TEAM.map((member, i) => (
            <div 
              key={member.id} 
              className="absolute transform -translate-x-1/2 -translate-y-full animate-bounce"
              style={{ 
                left: `${30 + i * 20}%`, 
                top: `${40 + (i % 2) * 15}%`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              <div className="bg-[#3E2723] text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shadow-lg mb-1 relative">
                {member.name}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#3E2723] rotate-45"></div>
              </div>
              <div className="w-4 h-4 rounded-full border-2 border-white bg-[#8D6E63] shadow-md mx-auto"></div>
            </div>
          ))}

          <div className="absolute bottom-6 left-6 flex space-x-2">
            <button className="bg-white p-3 rounded-xl shadow-md text-[#3E2723] hover:bg-[#F5F1EB] transition-colors">
              <i className="fas fa-plus"></i>
            </button>
            <button className="bg-white p-3 rounded-xl shadow-md text-[#3E2723] hover:bg-[#F5F1EB] transition-colors">
              <i className="fas fa-minus"></i>
            </button>
          </div>

          <div className="absolute top-6 right-6 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-white/40 shadow-sm flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-bold text-[#3E2723]">Live Feed Active</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#D7CCC8]/50 p-6 flex flex-col space-y-4 shadow-sm overflow-y-auto">
          <h3 className="font-serif text-lg text-[#3E2723] border-b pb-2">Active Field Team</h3>
          {INITIAL_TEAM.map((member) => (
            <div key={member.id} className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#D7CCC8]/30 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#EAE2D6] flex items-center justify-center text-[#8D6E63] font-bold">
                {member.name[0]}
              </div>
              <div>
                <p className="text-sm font-bold text-[#3E2723]">{member.name}</p>
                <p className="text-[10px] text-[#8D6E63] uppercase tracking-wide">{member.role}</p>
                <p className="text-[10px] text-green-600 mt-1 italic">{member.lastActive}</p>
              </div>
            </div>
          ))}
          <button className="w-full py-3 border-2 border-dashed border-[#D7CCC8] text-[#8D6E63] text-sm rounded-2xl hover:bg-[#FDFBF7] transition-all">
            + Assign Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamTracker;
