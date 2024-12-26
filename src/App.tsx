import React, { useRef, useEffect } from 'react';
import { ChatHeader } from './components/ChatHeader';
import { ChatMessages } from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';
import { useChat } from './hooks/useChat';

export function App() {
  const { chatState, handleSendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
        <ChatHeader />
        <ChatMessages
          messages={chatState.messages}
          isTyping={chatState.isTyping}
          messagesEndRef={messagesEndRef}
        />
        <div className="p-4 border-t">
          <ChatInput
            onSendMessage={handleSendMessage}
            disabled={chatState.isTyping}
          />
        </div>
      </div>
    </div>
  );
}