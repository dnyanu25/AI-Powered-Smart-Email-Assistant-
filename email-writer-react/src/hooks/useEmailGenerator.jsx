import { useState } from 'react';
import emailService from '../services/emailService';

/**
 * Custom hook for email generation logic 
 */
export const useEmailGenerator = () => {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /**
   * Generate email reply
   */
  const handleGenerate = async () => {
    // Validation
    if (!emailContent.trim()) {
      setError('Please enter email content');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const reply = await emailService.generateReply(emailContent, tone);
      setGeneratedReply(reply);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Reset all fields
   */
  const handleReset = () => {
    setEmailContent('');
    setTone('');
    setGeneratedReply('');
    setError('');
  };

  /**
   * Clear only generated reply
   */
  const clearReply = () => {
    setGeneratedReply('');
  };

  return {
    // State
    emailContent,
    tone,
    generatedReply,
    loading,
    error,
    
    // Setters
    setEmailContent,
    setTone,
    
    // Actions
    handleGenerate,
    handleReset,
    clearReply
  };
};
