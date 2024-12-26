export const generateBotResponse = async (userMessage: string): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return "Hello! How can I help you today?";
  } else if (lowerMessage.includes('how are you')) {
    return "I'm doing well, thank you for asking! How are you?";
  } else if (lowerMessage.includes('bye')) {
    return "Goodbye! Have a great day!";
  } else if (lowerMessage.includes('weather')) {
    return "I'm sorry, I don't have access to weather information.";
  }
  
  return "I'm not sure how to respond to that.";
};