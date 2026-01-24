import { useState } from 'react';
import { Box, TextField, Typography, Button, Paper, Chip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RefreshIcon from '@mui/icons-material/Refresh';

const GeneratedReply = ({ reply, onReset }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(reply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!reply) return null;

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3, backgroundColor: '#f5f5f5' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
          ✅ Generated Reply
        </Typography>
        <Chip 
          label="Ready to use" 
          color="success" 
          size="small" 
          icon={<CheckCircleIcon />}
        />
      </Box>

      <TextField
        fullWidth
        multiline
        rows={8}
        variant="outlined"
        value={reply}
        InputProps={{ readOnly: true }}
        sx={{
          mb: 2,
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'white',
          },
        }}
      />

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          startIcon={copied ? <CheckCircleIcon /> : <ContentCopyIcon />}
          onClick={handleCopy}
          color={copied ? 'success' : 'primary'}
          sx={{ flex: 1 }}
        >
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </Button>

        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={onReset}
          sx={{ flex: 1 }}
        >
          Generate Another
        </Button>
      </Box>
    </Paper>
  );
};

export default GeneratedReply;