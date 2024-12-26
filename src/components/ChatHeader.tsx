import React from 'react';
import { Bot } from 'lucide-react';

export function ChatHeader() {
  return (
    <div className="bg-blue-500 p-4 flex items-center gap-2">
      <Bot className="text-white" size={24} />
      <h1 className="text-xl font-semibold text-white">Simple Chatbot</h1>
    </div>
  );
}