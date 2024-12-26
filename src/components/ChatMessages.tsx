import React from 'react';
import { Bot } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { Message } from '../types/chat';

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export function ChatMessages({ messages, isTyping, messagesEndRef }: ChatMessagesProps) {
  return (
    <div className="h-[500px] overflow-y-auto p-4 flex flex-col gap-4">
      {messages.map(message => (
        <ChatMessage key={message.id} message={message} />
      ))}
      {isTyping && (
        <div className="flex items-center gap-2 text-gray-500">
          <Bot size={20} />
          <div className="typing-indicator">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}