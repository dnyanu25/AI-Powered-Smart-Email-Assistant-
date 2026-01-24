import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <HeroSection />
    </Box>
  );
};

export default HomePage;