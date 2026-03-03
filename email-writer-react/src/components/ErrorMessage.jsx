import { Alert, Collapse } from '@mui/material';

const ErrorMessage = ({ message }) => {
  return (
    <Collapse in={!!message}>
      <Alert 
        severity="error" 
        sx={{ mb: 3 }}
        variant="filled" 
      >
        {message}
      </Alert>
    </Collapse>
  );
};

export default ErrorMessage;
