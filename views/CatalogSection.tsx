
import React, { useState, useEffect } from 'react';
import { ChoiceItem } from '../types';
import { INITIAL_CHOICES } from '../constants';
import { getDecorationIdeas } from '../services/geminiService';

interface CatalogSectionProps {
  category: 'music' | 'catering' | 'theme';
  title: string;
  subtitle: string;
}

const CatalogSection: React.FC<CatalogSectionProps> = ({ category, title, subtitle }) => {
  const [items, setItems] = useState<ChoiceItem[]>(INITIAL_CHOICES.filter(i => i.category === category));
  const [activeTab, setActiveTab] = useState<'new' | 'tried'>('tried');
  const [aiIdeas, setAiIdeas] = useState<string>('');
  const [loadingAi, setLoadingAi] = useState(false);

  const filteredItems = items.filter(i => i.status === activeTab);

  const handleGetAiIdeas = async () => {
    setLoadingAi(true);
    const ideas = await getDecorationIdeas(category === 'theme' ? 'French Chic' : title);
    setAiIdeas(ideas);
    setLoadingAi(false);
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-4xl font-serif text-[#3E2723]">{title}</h2>
          <p className="text-[#8D6E63] mt-1">{subtitle}</p>
        </div>
        <div className="flex bg-[#F5F1EB] p-1 rounded-xl">
          <button 
            onClick={() => setActiveTab('tried')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'tried' ? 'bg-white shadow-sm text-[#3E2723]' : 'text-[#8D6E63]'}`}
          >
            Past Favorites
          </button>
          <button 
            onClick={() => setActiveTab('new')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'new' ? 'bg-white shadow-sm text-[#3E2723]' : 'text-[#8D6E63]'}`}
          >
            Scouted / New
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-[#D7CCC8]/50 group shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="h-48 relative overflow-hidden">
              <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 flex gap-1">
                {item.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-white/90 backdrop-blur rounded text-[10px] font-bold text-[#3E2723]">{tag}</span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-serif text-[#3E2723]">{item.name}</h4>
                <div className="flex text-amber-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star ${i < item.rating ? 'fill-current' : 'text-gray-200'}`}></i>
                  ))}
                </div>
              </div>
              <p className="text-sm text-[#5D4037] mb-6">{item.description}</p>
              <div className="flex justify-between items-center pt-4 border-t border-[#F5F1EB]">
                <button className="text-xs font-bold text-[#8D6E63] hover:text-[#3E2723] transition-colors">
                  VIEW DETAILS
                </button>
                <button className="w-8 h-8 rounded-full border border-[#D7CCC8] text-[#8D6E63] flex items-center justify-center hover:bg-[#3E2723] hover:text-white transition-all">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        ))}

        <button className="border-2 border-dashed border-[#D7CCC8] rounded-3xl flex flex-col items-center justify-center p-8 text-[#8D6E63] hover:bg-[#F5F1EB] transition-all group">
          <div className="w-12 h-12 rounded-full bg-[#F5F1EB] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <i className="fas fa-plus"></i>
          </div>
          <span className="text-sm font-bold">Add New Entry</span>
        </button>
      </div>

      <div className="mt-12 bg-[#F5F1EB] p-8 rounded-3xl border border-[#D7CCC8]/50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-serif text-[#3E2723]">Gemini Inspiration Studio</h3>
          <button 
            onClick={handleGetAiIdeas}
            disabled={loadingAi}
            className="px-6 py-2 bg-[#3E2723] text-white rounded-xl text-sm font-bold hover:bg-[#5D4037] disabled:opacity-50 transition-all"
          >
            {loadingAi ? 'GENIAL IDEAS...' : `GET ${category.toUpperCase()} IDEAS`}
          </button>
        </div>
        
        {aiIdeas ? (
          <div className="bg-white p-6 rounded-2xl border border-[#D7CCC8]/30 animate-slideUp">
             <div className="prose prose-sm text-[#5D4037]" dangerouslySetInnerHTML={{ __html: aiIdeas.replace(/\n/g, '<br/>') }} />
          </div>
        ) : (
          <div className="text-center py-10 text-[#8D6E63] italic border-2 border-dashed border-[#D7CCC8]/50 rounded-2xl">
            Ask Gemini for sophisticated event inspirations for this section.
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogSection;
