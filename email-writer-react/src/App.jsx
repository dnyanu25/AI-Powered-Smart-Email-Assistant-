import { useState } from 'react';
import './App.css'
import { Container,Box, TextField, Typography, FormControl,InputLabel, Select, MenuItem, Button, CircularProgress } from '@mui/material';
import axios from 'axios';
function App() {
 const [emailContent,setEmailContent] = useState('');
  const [tone,setTone] = useState('');
  const[generatedReply,setGeneratedReply]=useState('');
 
  const [loading,setLoading] = useState(false);

  const[error,setError]=useState('');

  const handleSubmit = async () =>{
      setLoading(true);
      setError('');
      try{
        const response= await axios.post("http://localhost:8080/api/email/generate",{
          emailContent,tone
        });
        setGeneratedReply(typeof response.data === 'string' ? response.data:JSON.stringify(response.data));
      }catch(error)
      {
        setError('failed to generate reply try again')
        console.error(error);
      }
      finally{
        setLoading(false);
      }
  };


  return (
   
      <Container maxWidth="md" sx={{py:4}}>
        <Typography variant='h3' component="h1" gutterBottom>Email Reply Generator</Typography>
      <Box sx={{mx:3}}>
        <TextField 
        fullWidth
        multiline
        rows={6}
        variant='outlined'
        value={emailContent || ' '}
        onChange={(e)=> setEmailContent(e.target.value)}
        sx={{mb:2}}/>
        
        <FormControl fullWidth sx={{mb:5}}>
           <InputLabel>Tone(Optional)</InputLabel>
           <Select
           value={tone ||''}
           label={"Tone(optional)"}
           onChange={(e)=>setTone(e.target.value)}>
           <MenuItem value="">None</MenuItem>
            <MenuItem value="Professional">Professional</MenuItem>
             <MenuItem value="Friendly">Friendly</MenuItem>
              <MenuItem value="Casual">Casual</MenuItem>
             </Select>
        </FormControl>

        {/* enable only if content is there */}
        <Button
          variant='contained'
          onClick={handleSubmit}
          disabled={!emailContent || loading}
          fullWidth>
          {loading ? <CircularProgress size={24}/> :"Generate reply"}
        </Button>
      </Box>
    {/* if there i serrr */}
       {
        error && (
           <Typography color sx={{mb:2}}>Error ! Try Again</Typography>
        )
       }
      {/* generate reply if exist */}

      {generatedReply &&(

        <Box sx={{mt:3}}>
          <Typography variant='h6' gutterBottom>
            Generated reply:
          </Typography>
          <TextField
          fullWidth
          multiline
          rows={6}
          variant='outlined'
          value={generatedReply || ''}
          inputProps={{readOnly :true}}/>

          <Button
  variant="outlined"
  sx={{ mt: 2 }}
  onClick={() => navigator.clipboard.writeText(generatedReply)}
>
  Copy to Clipboard
</Button>

          
        </Box>
      )}
      </Container>
   
  )
}

export default App
