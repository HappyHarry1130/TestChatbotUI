import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`flex items-start gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`p-2 rounded-full ${message.isBot ? 'bg-blue-100' : 'bg-gray-100'}`}>
        {message.isBot ? <Bot size={20} /> : <User size={20} />}
      </div>
      <div className={`flex-1 px-4 py-2 rounded-lg ${
        message.isBot ? 'bg-blue-50' : 'bg-gray-50'
      }`}>
        <p className="text-gray-800">{message.content}</p>
        <span className="text-xs text-gray-500">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}