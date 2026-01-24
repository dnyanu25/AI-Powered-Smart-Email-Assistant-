import { FormControl, InputLabel, Select, MenuItem, Box, Typography } from '@mui/material';
import { TONE_OPTIONS } from '../utils/constants';

const ToneSelector = ({ value, onChange, disabled }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
        🎯 Select Tone (Optional)
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Tone</InputLabel>
        <Select
          value={value}
          label="Tone"
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        >
          {TONE_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ToneSelector;