import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Collapse from '@mui/material/Collapse';
import { Grow } from '@material-ui/core';

import { useParams, useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    position: "relative",
    '&:hover': {
      transition: 'all .5s ease-in-out',
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.4)",
    }
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  button: {
    position: "relative",
    height: 20,
    fontSize: 12,
    margin: theme.spacing(1),
    padding: 20,
    // '&:hover': {
    //   transition: 'all .5s ease-in-out',
    //   boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    // },
  },
  action: {
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
  },
}));
export default function ProductCard(props) {
  
  let navigate = useNavigate();
  const classes = useStyles();
  const { product } = props;
  const [hover, setHover] = useState(false);

  // const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleAddToCartClick = () => {
    console.log("Click to add to cart" + product.id);
  };
  const handleDetailClick = () => {
    navigate(`/products/${ product.id}`);
    console.log("Click to view detail of product id: " + product.id);
  };
  return (
    //   <Card.Img variant="top" src={"/images/products/" + product.image[0]} />

    <Card
      className={classes.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.4)"}}
    >
      <CardMedia
        className={classes.media}
        image={"/images/products/" + product.image[0]}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
      </CardContent>

      <div >

        
        <Grow in={hover} timeout={1000}>
          {/* <Button variant="contained" color="primary">Click me!</Button> */}
          <div className={classes.action}>
            <Button
              className={classes.button}
               variant="outlined"
              // color="primary"
              onClick={handleAddToCartClick}>
              Add to cart
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
              color="secondary"
              onClick={handleDetailClick}
            >
              Details
            </Button>
            
          </div>
        </Grow>
        {/* {hover && (
          <Collapse  orientation="horizontal" in={true} timeout={2000}>
            {console.log("On hover")}
            <div className={classes.action}>
            <Button
              className={classes.button}
              // variant="contained"
              // color="primary"
              onClick={handleAddToCartClick}>
              Add to cart
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={handleDetailClick}
            >
              Details
            </Button>
            </div>
          </Collapse >
            
        )} */}
      </div>
    </Card>
  );
};

// export default ProductCard;