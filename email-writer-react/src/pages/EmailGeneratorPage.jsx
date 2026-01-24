import { Container, Box, Typography, Paper } from '@mui/material';
import { useEmailGenerator } from '../hooks/useEmailGenerator';
import EmailInput from '../components/EmailInput';
import ToneSelector from '../components/ToneSelector';
import GenerateButton from '../components/GenerateButton';
import GeneratedReply from '../components/GeneratedReply';
import ErrorMessage from '../components/ErrorMessage';
import Navbar from '../components/Navbar';

const EmailGeneratorPage = () => {
  const {
    emailContent,
    setEmailContent,
    tone,
    setTone,
    generatedReply,
    loading,
    error,
    handleGenerate,
    handleReset
  } = useEmailGenerator();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content - Centered */}
      <Box 
        sx={{ 
          flex: 1,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4,
          px: 2
        }}
      >
        <Container maxWidth="md">
          <Paper 
            elevation={6} 
            sx={{ 
              p: { xs: 3, md: 4 }, 
              borderRadius: 3,
              width: '100%',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            {/* Header */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography 
                variant="h3" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                📨 AI Email Reply Generator
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Generate professional email replies in seconds with AI
              </Typography>
            </Box>

            {/* Error Display */}
            <ErrorMessage message={error} />

            {/* Input Components */}
            <EmailInput 
              value={emailContent}
              onChange={setEmailContent}
              disabled={loading}
            />

            <ToneSelector 
              value={tone}
              onChange={setTone}
              disabled={loading}
            />

            <GenerateButton 
              onClick={handleGenerate}
              loading={loading}
              disabled={!emailContent.trim()}
            />

            {/* Generated Reply Display */}
            <GeneratedReply 
              reply={generatedReply}
              onReset={handleReset}
            />

            {/* Footer */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Typography variant="caption" color="text.secondary">
                Powered by Groq AI • Built with React & Spring Boot
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default EmailGeneratorPage;