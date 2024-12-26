import axios from 'axios';

const API_URL = 'https://9xyvg99pnprwzg-5000.proxy.runpod.net';

export const chatApi = {
  async sendMessage(message: string): Promise<string> {
    try {
      const response = await axios.post(`${API_URL}/ask_assistant`, {
        user_message: message
      });
      return response.data.response;
    } catch (error) {
      console.error('Error sending message to backend:', error);
      throw new Error('Failed to get response from the assistant');
    }
  }
};