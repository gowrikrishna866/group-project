import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.pinimg.com/736x/9f/6b/ed/9f6bedc74e89a2d3e4a8c17399e5220e.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SCHOOL BAG
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         creme in colour ,4 compartments,water proof,laptop compartment,no bulky feel
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Shop</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

    
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.piquadro.com/cdn/shop/files/OM5289OM6-AR_DETT2.jpg?crop=center&v=1693476628&width=800"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          UMBERLLA
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Easy to handle and carry,5 fold ,orange in color,
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Shop</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
          <CardMedia
        sx={{ height: 140 }}
        image="https://cdn.fcglcdn.com/brainbees/images/products/583x720/18974972a.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          pencil set
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Pre sharpened,Lightweight,Break-resistant,Ideal for students
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Shop</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
          <CardMedia
        sx={{ height: 140 }}
        image="https://i5.walmartimages.com/asr/18f6ae82-099e-49d6-bda2-071ab04d35e0.e99abc06692620c98644fe68b1044388.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BOOKS
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Mid-sized,170 pages,Single-lined  
       
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Shop</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
          <CardMedia
        sx={{ height: 140 }}
        image="https://m.media-amazon.com/images/I/61QpnaagUdL._SL1500_.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TIFFIN box
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          2 comparents are inside,Steel coated and also Lunch bag included
           
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Shop</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
          <CardMedia
        sx={{ height: 140 }}
        image="https://cdn.fcglcdn.com/brainbees/images/products/583x720/18722577a.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SHOES
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Black in color,water-resistant,gripped,long lasting,socks are included with it

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Shop</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
          <CardMedia
        sx={{ height: 140 }}
        image="https://th.bing.com/th/id/R.61f7b2eb0fbd8409590edea3b34800b5?rik=USpOXQ7DyCCDow&riu=http%3a%2f%2fecx.images-amazon.com%2fimages%2fI%2f71Izy7inEWL._SL1500_.jpg&ehk=XXcpq8126l8UxresPd%2bWF0cvG5yei6CGoifqeZdbfHw%3d&risl=&pid=ImgRaw&r=0"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         BOTTLES
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         1L water bottle,plastic coated,Multi-colored
          <CardActions>
        <Button size="small">Shop</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

         
        </Typography>
      </CardContent>
   
    </Card>
    
  );
}