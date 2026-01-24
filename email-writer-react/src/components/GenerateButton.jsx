import { Button, CircularProgress } from '@mui/material';

const GenerateButton = ({ onClick, loading, disabled }) => {
  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      onClick={onClick}
      disabled={disabled || loading}
      sx={{
        mb: 3,
        py: 1.5,
        fontSize: '1rem',
        fontWeight: 600,
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        '&:hover': {
          background: 'linear-gradient(45deg, #1976d2 30%, #2196F3 90%)',
        },
      }}
    >
      {loading ? (
        <>
          <CircularProgress size={24} sx={{ mr: 1, color: 'white' }} />
          Generating...
        </>
      ) : (
        '✨ Generate Reply'
      )}
    </Button>
  );
};

export default GenerateButton;