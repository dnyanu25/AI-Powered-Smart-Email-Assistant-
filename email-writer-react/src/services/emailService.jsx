import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';
import authService from './authService';

const emailService = {
  generateReply: async (emailContent, tone) => {
    try {
      const token = authService.getToken();
      
      const response = await axios.post(`${API_BASE_URL}/generate`, {
        emailContent,
        tone
      }, {
        headers: {
          'Authorization': `Bearer ${token}` // Add JWT token
        }
      });
      
      return typeof response.data === 'string' 
        ? response.data 
        : JSON.stringify(response.data);
    } catch (error) {
      console.error('Email Service Error:', error);
      
      // If unauthorized, redirect to login
      if (error.response?.status === 401 || error.response?.status === 403) {
        authService.logout();
        window.location.href = '/login';
        throw new Error('Session expired. Please login again.');
      }
      
      throw new Error(
        error.response?.data?.message || 
        'Failed to generate email reply. Please try again.'
      );
    }
  }
};

export default emailService;