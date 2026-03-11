import '@fontsource/quicksand/700.css';
import { Typography } from '@mui/material';

export default function Title() {
    return (
        <Typography 
  variant="h2" 
  component="h1" 
  sx={{ 
    fontFamily: '"Quicksand", sans-serif',
    fontWeight: 700,
    color: '#5DA3EA', 
    textAlign: 'center',
    marginTop: '2rem'
  }}
>
    Clínica Veterinária <br/>
  Cuidamos de quem você ama.
</Typography>
    );
}