import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
const styles = (muiBaseTheme) => ({
    card: {
        maxWidth: 300,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        
    '&:hover': {
        transform: 'scale(1.05)',
        transition: 'all .2s ease-in-out',
        boxShadow: '0px 0px 20px rgba(0,0,0,0.2)',
      }
    },
    media: {
        paddingTop: "56.25%"
    },
    content: {
        textAlign: "left",
        padding: muiBaseTheme.spacing.unit * 3
    },
    divider: {
        margin: `${muiBaseTheme.spacing.unit * 3}px 0`
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    },
    avatar: {
        display: "inline-block",
        border: "2px solid white",
        "&:not(:first-of-type)": {
            marginLeft: -muiBaseTheme.spacing.unit
        }
    },
    Button: {}
});

function CardP({ Product }) {
    return (
        <div>
            <Card >
                <CardMedia
                    
                    image={
                        "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                    }
                />
                <CardContent >
                    <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                    >
                        Nature Around Us
                    </Typography>
                    <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                    >
                        We are going to learn different kinds of species in nature that live
                        together to form amazing environment.
                    </Typography>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <Button>Add to cart</Button>
                        <Button>Details</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
export default CardP;