import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const HeroSection = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate('/generator');
    } else {
      navigate('/signup');
    }
  };

  return (
    <Box
      sx={{
        flex: 1, // Take remaining space after navbar
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        px: 2
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          {/* Main Heading */}
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              mb: 3,
              lineHeight: 1.2
            }}
          >
            ✨ Write Professional Emails
            <br />
            Effortlessly with AI
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h5"
            sx={{
              mb: 5,
              opacity: 0.95,
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Generate perfect email replies in seconds using the power of AI.
            Save time and write better emails.
          </Typography>

          {/* Buttons */}
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              mb: 8
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleGetStarted}
              sx={{
                px: 5,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                backgroundColor: 'white',
                color: '#667eea',
                textTransform: 'uppercase',
                borderRadius: 2,
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                '&:hover': {
                  backgroundColor: '#f8f9fa',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.3)'
                },
                transition: 'all 0.3s'
              }}
            >
              🚀 Get Started Free
            </Button>

            <Button
              variant="outlined"
              size="large"
              href="#features"
              sx={{
                px: 5,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'white',
                borderColor: 'white',
                borderWidth: 2,
                textTransform: 'uppercase',
                borderRadius: 2,
                '&:hover': {
                  borderColor: 'white',
                  borderWidth: 2,
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  transform: 'translateY(-3px)'
                },
                transition: 'all 0.3s'
              }}
            >
              Learn More
            </Button>
          </Box>

          {/* Features Section */}
          <Box
            id="features"
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 3,
              mt: 10
            }}
          >
            {[
              { 
                icon: '⚡', 
                title: 'Lightning Fast', 
                desc: 'Generate replies in seconds' 
              },
              { 
                icon: '🎯', 
                title: 'Professional Tone', 
                desc: 'Choose from multiple tones' 
              },
              { 
                icon: '🔒', 
                title: 'Secure & Private', 
                desc: 'Your data is protected' 
              }
            ].map((feature, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  p: 4,
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.18)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    backgroundColor: 'rgba(255,255,255,0.18)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.2)'
                  }
                }}
              >
                <Typography sx={{ fontSize: '3.5rem', mb: 2 }}>
                  {feature.icon}
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 1.5,
                    fontSize: '1.25rem'
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography sx={{ opacity: 0.9, fontSize: '1rem' }}>
                  {feature.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;