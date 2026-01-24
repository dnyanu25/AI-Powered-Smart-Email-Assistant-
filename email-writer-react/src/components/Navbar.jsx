import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: '1.3rem'
            }}
          >
            📨 AI Email Writer
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Button
              component={Link}
              to="/"
              sx={{ 
                color: 'white', 
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                px: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Home
            </Button>

            {user ? (
              <>
                <Button
                  component={Link}
                  to="/generator"
                  sx={{ 
                    color: 'white', 
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    fontSize: '0.875rem',
                    px: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Get Started
                </Button>
                
                <Typography 
                  sx={{ 
                    color: 'white', 
                    mx: 2,
                    fontSize: '0.95rem'
                  }}
                >
                  Hi, {user.name}!
                </Typography>
                
                <Button
                  onClick={handleLogout}
                  variant="outlined"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    fontSize: '0.875rem',
                    px: 3,
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.15)'
                    }
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/login"
                  sx={{ 
                    color: 'white', 
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    fontSize: '0.875rem',
                    px: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Login
                </Button>
                
                <Button
                  component={Link}
                  to="/signup"
                  variant="contained"
                  sx={{
                    backgroundColor: 'white',
                    color: '#667eea',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    fontSize: '0.875rem',
                    px: 3,
                    ml: 1,
                    '&:hover': {
                      backgroundColor: '#f8f9fa'
                    }
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;