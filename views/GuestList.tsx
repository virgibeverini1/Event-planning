
import React, { useState } from 'react';
import { INITIAL_GUESTS } from '../constants.tsx';
import { Guest } from '../types.ts';

const GuestList: React.FC = () => {
  const [guests, setGuests] = useState<Guest[]>(INITIAL_GUESTS);
  const [filter, setFilter] = useState<'all' | 'checked'>('all');

  const toggleCheck = (id: string) => {
    setGuests(prev => prev.map(g => g.id === id ? { ...g, checkedIn: !g.checkedIn } : g));
  };

  const filtered = filter === 'all' ? guests : guests.filter(g => g.checkedIn);

  const sendEmail = (email: string) => {
    window.location.href = `mailto:${email}?subject=Event Update`;
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-serif text-[#3E2723]">Guest Management</h2>
          <p className="text-[#8D6E63] mt-1">RSVP tracking and real-time check-in.</p>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${filter === 'all' ? 'bg-[#3E2723] text-white' : 'bg-white text-[#5D4037] border'}`}
          >
            All Guests
          </button>
          <button 
            onClick={() => setFilter('checked')}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${filter === 'checked' ? 'bg-[#3E2723] text-white' : 'bg-white text-[#5D4037] border'}`}
          >
            Checked In
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-[#D7CCC8]/50 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#F5F1EB] text-[#8D6E63] text-xs uppercase tracking-widest">
            <tr>
              <th className="px-8 py-4 font-semibold">Status</th>
              <th className="px-8 py-4 font-semibold">Guest Name</th>
              <th className="px-8 py-4 font-semibold">RSVP</th>
              <th className="px-8 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F5F1EB]">
            {filtered.map((guest) => (
              <tr key={guest.id} className="hover:bg-[#FDFBF7] transition-colors">
                <td className="px-8 py-5">
                  <button 
                    onClick={() => toggleCheck(guest.id)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      guest.checkedIn ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <i className={`fas ${guest.checkedIn ? 'fa-check' : 'fa-square'}`}></i>
                  </button>
                </td>
                <td className="px-8 py-5">
                  <div>
                    <p className="font-semibold text-[#3E2723]">{guest.name}</p>
                    <p className="text-xs text-[#8D6E63]">{guest.email}</p>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    guest.status === 'attending' ? 'bg-green-50 text-green-700' : 
                    guest.status === 'pending' ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {guest.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-right space-x-2">
                  <button 
                    onClick={() => sendEmail(guest.email)}
                    className="p-2 text-[#8D6E63] hover:text-[#3E2723] transition-colors"
                    title="Send Email"
                  >
                    <i className="fas fa-envelope"></i>
                  </button>
                  <button className="p-2 text-[#8D6E63] hover:text-[#3E2723] transition-colors">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GuestList;
