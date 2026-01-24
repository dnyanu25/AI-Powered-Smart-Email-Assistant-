import { TextField, Box, Typography } from '@mui/material';

const EmailInput = ({ value, onChange, disabled }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
        📧 Original Email Content
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={6}
        variant="outlined"
        placeholder="Paste the email you want to reply to..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#1976d2',
            },
          },
        }}
      />
      <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
        {value.length} characters
      </Typography>
    </Box>
  );
};

export default EmailInput;