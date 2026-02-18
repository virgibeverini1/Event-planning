
import React, { useState, useRef, useEffect } from 'react';
import { chatWithClient } from '../services/geminiService';

const ChatWithClient: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Good morning. This is your personal concierge. How can I assist with your upcoming event today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    
    setIsTyping(true);
    try {
      const history = messages.map(m => ({ role: m.role === 'user' ? 'user' : 'model', message: m.text }));
      history.push({ role: 'user', message: userMsg });
      
      const response = await chatWithClient(history);
      setMessages(prev => [...prev, { role: 'ai', text: response || "I'm sorry, I couldn't process that." }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'ai', text: "Connection issues. Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="animate-fadeIn h-full flex flex-col">
      <div className="mb-8">
        <h2 className="text-4xl font-serif text-[#3E2723]">Client Communication</h2>
        <p className="text-[#8D6E63] mt-1">Direct and secure line to your premium clients.</p>
      </div>

      <div className="flex-1 bg-white rounded-3xl border border-[#D7CCC8]/50 flex flex-col overflow-hidden shadow-sm h-[600px]">
        {/* Chat Header */}
        <div className="bg-[#F5F1EB] px-8 py-4 border-b border-[#D7CCC8]/50 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#8D6E63] flex items-center justify-center text-white">
                <i className="fas fa-crown"></i>
              </div>
              <div className="absolute -bottom-0 -right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <p className="font-bold text-[#3E2723]">Client: Madame De Luca</p>
              <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest">Active Now</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-[#8D6E63] hover:bg-white rounded-lg transition-colors"><i className="fas fa-phone"></i></button>
            <button className="p-2 text-[#8D6E63] hover:bg-white rounded-lg transition-colors"><i className="fas fa-video"></i></button>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-[#FDFBF7]">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-4 rounded-2xl ${
                m.role === 'user' 
                ? 'bg-[#3E2723] text-white rounded-tr-none' 
                : 'bg-[#EAE2D6] text-[#3E2723] rounded-tl-none border border-[#D7CCC8]/30'
              }`}>
                <p className="text-sm leading-relaxed">{m.text}</p>
                <p className={`text-[9px] mt-2 opacity-60 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start animate-pulse">
              <div className="bg-[#EAE2D6] p-4 rounded-2xl rounded-tl-none border border-[#D7CCC8]/30">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-[#8D6E63] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-[#8D6E63] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-[#8D6E63] rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-6 bg-white border-t border-[#D7CCC8]/50">
          <div className="flex items-center space-x-4">
            <button className="text-[#8D6E63] hover:text-[#3E2723] transition-colors"><i className="fas fa-paperclip text-lg"></i></button>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Write a sophisticated reply..."
              className="flex-1 bg-[#F5F1EB] border-none rounded-2xl px-6 py-3 text-sm focus:ring-2 focus:ring-[#8D6E63] outline-none"
            />
            <button 
              onClick={handleSend}
              className="w-12 h-12 bg-[#3E2723] text-white rounded-2xl flex items-center justify-center hover:bg-[#5D4037] transition-all"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWithClient;
