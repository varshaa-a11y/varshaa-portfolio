"use client";

import React, { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user'|'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      
      setMessages(prev => [...prev, { role: 'bot', text: data.reply || data.error }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, something went wrong.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[calc(100vw-3rem)] sm:w-96 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col mb-4 max-h-[500px] h-[70vh] sm:h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                🤖
              </div>
              <div>
                <h3 className="font-bold text-sm">Varshaa AI</h3>
                <p className="text-xs text-blue-100">Ask me anything!</p>
              </div>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 text-sm mt-4">
                Hi! I&apos;m Varshaa&apos;s AI assistant. How can I help you today?
              </div>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className={`max-w-[85%] rounded-2xl p-3 text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white self-end rounded-tr-sm shadow-sm' : 'bg-white border border-gray-200 text-gray-800 self-start rounded-tl-sm shadow-sm'}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="bg-white border border-gray-200 text-gray-500 self-start rounded-2xl rounded-tl-sm p-3 text-sm flex gap-1 shadow-sm">
                <span className="animate-bounce">●</span><span className="animate-bounce" style={{animationDelay: '0.2s'}}>●</span><span className="animate-bounce" style={{animationDelay: '0.4s'}}>●</span>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-100 text-gray-800 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex items-center justify-center w-10 h-10"
            >
              <svg className="w-4 h-4 transform rotate-90 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 hover:scale-105 transition-all focus:outline-none flex items-center justify-center animate-bounce-slight"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </button>
      )}
    </div>
  );
}
