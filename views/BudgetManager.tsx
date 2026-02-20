
import React, { useState } from 'react';
import { INITIAL_BUDGET } from '../constants.tsx';
import { BudgetItem } from '../types.ts';

const BudgetManager: React.FC = () => {
  const [budget, setBudget] = useState<BudgetItem[]>(INITIAL_BUDGET);
  
  const total = budget.reduce((acc, curr) => acc + curr.amount, 0);
  const paid = budget.filter(b => b.status === 'paid').reduce((acc, curr) => acc + curr.amount, 0);
  const remaining = total - paid;

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-4xl font-serif text-[#3E2723]">Financial Overview</h2>
        <p className="text-[#8D6E63] mt-1">Detailed budget tracking by category and payment status.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#3E2723] text-white p-8 rounded-3xl shadow-lg">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-2 font-bold">Total Projected</p>
          <p className="text-4xl font-serif">€{total.toLocaleString()}</p>
        </div>
        <div className="bg-white border border-[#D7CCC8] p-8 rounded-3xl shadow-sm">
          <p className="text-xs uppercase tracking-widest text-[#8D6E63] mb-2 font-bold">Paid to Date</p>
          <p className="text-4xl font-serif text-green-700">€{paid.toLocaleString()}</p>
        </div>
        <div className="bg-white border border-[#D7CCC8] p-8 rounded-3xl shadow-sm">
          <p className="text-xs uppercase tracking-widest text-[#8D6E63] mb-2 font-bold">Balance Due</p>
          <p className="text-4xl font-serif text-amber-700">€{remaining.toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-[#D7CCC8]/50 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-[#F5F1EB] flex justify-between items-center">
          <h3 className="text-xl font-serif text-[#3E2723]">Itemized Expenses</h3>
          <button className="bg-[#F5F1EB] text-[#3E2723] px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#EAE2D6] transition-all">
            + ADD EXPENSE
          </button>
        </div>
        <div className="divide-y divide-[#F5F1EB]">
          {budget.map((item) => (
            <div key={item.id} className="p-8 flex items-center justify-between hover:bg-[#FDFBF7] transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F5F1EB] flex items-center justify-center text-[#8D6E63]">
                  <i className={`fas ${
                    item.category === 'Venue' ? 'fa-building' : 
                    item.category === 'Catering' ? 'fa-concierge-bell' : 'fa-star'
                  }`}></i>
                </div>
                <div>
                  <p className="font-bold text-[#3E2723]">{item.name}</p>
                  <p className="text-xs text-[#8D6E63] uppercase tracking-wide">{item.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-serif text-[#3E2723]">€{item.amount.toLocaleString()}</p>
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                  item.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetManager;
