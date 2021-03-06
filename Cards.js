import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './member.jpg';
import Rating from './Rating';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 225,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Tower 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Member Servicing
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h6">
          Planned 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h6">
          Completed 
          </Typography>
          <Rating/>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Download
        </Button>
        <Button size="small" color="primary">
            Show More
        </Button>
      </CardActions>
    </Card>
  );
}
