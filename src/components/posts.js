import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/QuestionAnswer";
import { Link } from "react-router-dom";
import Header from "./header";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 1200,
    margin: "auto"
  },
  card: {
    maxWidth: 345,
    flexGrow: 1,
    margin: theme.spacing.unit * 2,
    border: "1px solid #edeeed",
    boxShadow: "0 0 0 5px rgba(0,0,0,0.03)"
  },
  media: {
    width: "345px",
    paddingTop: "100%"
  },
  button: {
    margin: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 6,
    border: "1px solid rgba(182, 185, 199, 0.5)",
    color: "#5e47e0",
  },
  commentsButton: {
    textDecoration: 'none',
  }
});

class Posts extends Component {
  render() {
    const { classes, post, commentData } = this.props;
    console.log(post);
    return (
      <div>
        <Header />
        <div className={classes.root}>
          {// here I used map function to render all the data cards and there
          // data with image and caption
          post.map((data, index) => {
            return (
              <Card className={classes.card} key={index}>
                <Link
                  to={{
                    pathname: "/comments",
                    state: {
                      data: data,
                      commentCounts:commentData[data.code] ? commentData[data.code].length : 0

                    }
                  }}
                >
                  {/* used link to go to the comments component using routes */}
                  <CardMedia
                    className={classes.media}
                    image={"images/" + data.display_src}
                    title="Media"
                  />
                  
                </Link>
                <CardContent>
                  <Typography component="p">{data.caption}</Typography>
                </CardContent>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={() => this.props.likeHandler(data)}
                >
                  {data.likes}
                  <FavoriteIcon />
                </Button>
                {/* used link to go the routes of comments */}
                <Link 
                  className={classes.commentsButton}
                  to={{ 
                    pathname: "/comments", 
                    state: { 
                      data: data,
                      commentCounts:commentData[data.code] ? commentData[data.code].length : 0
                    } 
                  }}
                >
                
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                  >
                  { commentData[data.code] ? commentData[data.code].length : 0 }
                    <CommentIcon />
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Posts);
