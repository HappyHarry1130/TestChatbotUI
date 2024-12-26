import { useState } from 'react';
import { ChatState, Message } from '../types/chat';
import { chatApi } from '../services/api';

export function useChat() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isTyping: false,
  });

  const addMessage = (content: string, isBot: boolean) => {
    const message: Message = {
      id: Date.now().toString(),
      content,
      isBot,
      timestamp: new Date(),
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleSendMessage = async (content: string) => {
    try {
      // Add user message
      addMessage(content, false);
      
      // Show typing indicator
      setChatState(prev => ({ ...prev, isTyping: true }));
      
      // Get response from backend
      const botResponse = await chatApi.sendMessage(content);
      
      // Add bot response
      setChatState(prev => ({
        isTyping: false,
        messages: [...prev.messages, {
          id: Date.now().toString(),
          content: botResponse,
          isBot: true,
          timestamp: new Date(),
        }],
      }));
    } catch (error) {
      // Handle error gracefully
      setChatState(prev => ({
        isTyping: false,
        messages: [...prev.messages, {
          id: Date.now().toString(),
          content: "Sorry, I'm having trouble connecting to the server. Please try again later.",
          isBot: true,
          timestamp: new Date(),
        }],
      }));
    }
  };

  return {
    chatState,
    handleSendMessage,
  };
}