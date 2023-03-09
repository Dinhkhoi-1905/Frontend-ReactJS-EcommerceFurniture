import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddToCartBtn from './AddToCartBtn';
// export default function CardP(props) {
const CardP = props =>{
  const { product } = props;
  let navigate = useNavigate();
  // console.log(props.stateCart)
  const handleDetailClick = () => {
    console.log('Detail click on '+ product._id);
    navigate(product._id)
  };
  // const handleAddToCart = () => {
  //   console.log('Add to cart click on '+ product._id);
  // };
  return (
    <Card sx={{ maxWidth: 300, marginTop: '30px', borderRadius: ' 10px ' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_36.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {/* <Button size="small" color="primary" onClick={handleAddToCart}>
          Add to cart
        </Button> */}
        <AddToCartBtn product={product}></AddToCartBtn>
        <Button size="small" color="primary" onClick={handleDetailClick}>
          Detail
        </Button>
      </CardActions>
    </Card>
  );
}
export default CardP;