
import React, { useState } from 'react';
import { LOCATIONS } from '../constants.tsx';
import { Location } from '../types.ts';

const LocationScouting: React.FC = () => {
  const [selected, setSelected] = useState<Location>(LOCATIONS[0]);

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-4xl font-serif text-[#3E2723]">Location Scouting</h2>
          <p className="text-[#8D6E63] mt-2">Curated luxury venues in Paris for your next masterpiece.</p>
        </div>
        <div className="flex space-x-2">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelected(loc)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selected.id === loc.id 
                ? 'bg-[#3E2723] text-white' 
                : 'bg-white text-[#5D4037] border border-[#D7CCC8] hover:bg-[#F5F1EB]'
              }`}
            >
              {loc.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
            <img 
              src={selected.previewUrl} 
              alt={selected.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-serif">{selected.name}</h3>
              <p className="flex items-center text-sm opacity-90 mt-1">
                <i className="fas fa-cube mr-2"></i> Interactive 3D Simulation Active
              </p>
            </div>
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-6 rounded-full text-white border border-white/40 hover:bg-white/40 transition-all">
              <i className="fas fa-play text-2xl"></i>
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D7CCC8]/50">
            <h4 className="text-xl font-serif text-[#3E2723] mb-4">Venue Description</h4>
            <p className="text-[#5D4037] leading-relaxed italic">{selected.description}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#3E2723] text-white p-8 rounded-3xl shadow-xl">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Surface Area</p>
                <p className="text-3xl font-serif">{selected.surfaceArea.toLocaleString()} m²</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Rental Cost</p>
                <p className="text-3xl font-serif">€{selected.rentCost.toLocaleString()} <span className="text-sm font-sans opacity-60">/ day</span></p>
              </div>
              <button className="w-full py-4 bg-[#8D6E63] rounded-xl font-bold tracking-wide hover:bg-[#A1887F] transition-colors">
                CHECK AVAILABILITY
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D7CCC8]/50">
            <h4 className="text-xl font-serif text-[#3E2723] mb-4 flex items-center">
              <i className="fas fa-gavel mr-2 text-[#8D6E63]"></i> Legal & Rules
            </h4>
            <ul className="space-y-3">
              {selected.legalRules.map((rule, i) => (
                <li key={i} className="flex items-start text-sm text-[#5D4037]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8D6E63] mt-1.5 mr-3 shrink-0"></span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationScouting;
