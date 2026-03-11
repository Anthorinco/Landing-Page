import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
   <Card elevation={8} sx={{ maxWidth: 1300, marginTop: 10, color: '#CBE986', mx: 'auto',}}>
  <CardMedia
  component="img" 
  image="/img/DogAndCat.jpg" 
  title="img_PETS"
  sx={{ 
    width: '100%',     
    height: 'auto',    
    maxHeight: '380px',
    aspectRatio: '16 / 9',
    objectFit: 'cover'
  }}
/>
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
     
    </Typography>
    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 30, textAlign: 'center', fontWeight: 700 }}>
      Venha conhecer nossa clínica veterinária!<br/>
      Aqui voce pode encontrar o melhor cuidado para seus animais de estimação.
    </Typography>
  </CardContent>
  <CardActions sx={{justifyContent: 'center', p: 4}}>
    <Button size="large" variant='contained' sx={{bgcolor: '#CBE986', color: 'black', fontWeight: 700}} >
      Consulte-nos
    </Button>
  </CardActions>
</Card>
  );
}