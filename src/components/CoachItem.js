import React from "react";
import { Link } from "@reach/router";

import "./CoachItem.css";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import CardActions from "@material-ui/core/CardActions/CardActions";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Grid from "@material-ui/core/Grid/Grid";
import createStyles from "@material-ui/core/es/styles/createStyles";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const style = (theme) =>
    createStyles({
        card: {
            //width: "200px",
            height: "75vh"
        }
    });

const images = importAll(
  require.context("../assets/", false, /\.(png|jpe?g|svg)$/)
);


class CoachItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {

      const title = `${this.props.firstName} from ${this.props.company}, ${this.props.location}`;
      const price = `$${this.props.ratePerHour}/session`;
      const imagePath = `../assets/${this.props.img}`;

    return (

        <Grid item xs={4} m={4}>

        <Card className={this.props.classes.card}>
            <CardActionArea>
                <CardMedia
                    component= "img"
                    alt="Coach Company"
                    height="140"
                    image= {imagePath}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {price}
                    </Typography>
                    <Typography component="p">
                        {this.props.bio}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>

        </Grid>
    );
  }
}

export default withStyles(style)(CoachItem);