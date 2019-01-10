import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/QuestionAnswer";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Delete from "@material-ui/icons/Clear";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Header from "./header";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 1200,
    margin: "auto",
    boxShadow: "0 0 0 5px rgba(0,0,0,0.03)",
    border: "1px solid #edeeed"
  },
  card: {
    maxWidth: 500,
    flexGrow: 1,
    margin: "auto",
    margin: theme.spacing.unit * 2
  },
  media: {
    width: "500px",
    paddingTop: "100%"
  },
  button: {
    margin: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 6,
    border: "1px solid rgba(182, 185, 199, 0.5)",
    color: "#5e47e0"
  },
  textField: {
    marginLeft: theme.spacing.unit * 6,
    marginRight: theme.spacing.unit * 6
  },
  authorText: {
    fontWeight: "bold",
    padding: theme.spacing.unit
  },
  commentBox: {
    margin: theme.spacing.unit * 4
  }
});

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      commentData: [],
      author: "",
      comment: "",
      commentCounts: 0
    };
  }

  // handleChange is a function where I controlled the input fields

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  // In handleComments function it will handle all the comments
  // The user will comment and also it will increase the number of comments
  //  It will save all the comments in commentData state
  handleComments = e => {
    if (e.charCode === 13) {
      const { commentData, author, comment, commentCounts } = this.state;
      commentData.push({ author: author, comment: comment });
      console.log(commentData);
      this.setState({
        commentData,
        author: "",
        comment: "",
        commentCounts: commentCounts + 1
      });
    }
  };

  // This function will delete the comments whenever the user will click on Delete
  delete = index => {
    const { commentData, commentCounts } = this.state;
    commentData.splice(index, 1);
    this.setState({
      commentData,
      commentCounts: commentCounts - 1
    });
  };

  render() {
    const { classes, location } = this.props;
    const { data } = location.state;
    const { commentData, commentCounts } = this.state;
    console.log(data)
    return (
      <div>
        <Header />
        <div className={classes.root}>
        {/* in this card component data is rendering by using the parents component  */}
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={"/images/" + data.display_src}
              title="Media"
            />
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
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              {commentCounts}
              <CommentIcon />
            </Button>
          </Card>

          <div>
            <div className={classes.commentBox}>
              <span className={classes.authorText}>Rani</span>
              <span>Wow :) what a nice place</span>
              <Delete />
              <Divider />
            </div>
            {/* if there is no data in the so it will return empty array else it will return 
            the data of author and comment */}
            {commentData === []
              ? null
              : commentData.map((comments, index) => {
                  return (
                    <div className={classes.commentBox} key={index}>
                      <span className={classes.authorText}>
                        {comments.author}
                      </span>
                      <span>{comments.comment}</span>
                      <Delete onClick={this.delete} />
                      <Divider />
                    </div>
                  );
                })}

            <TextField
              id="outlined-dense"
              label="Author"
              className={classes.textField}
              margin="dense"
              variant="outlined"
              onKeyPress={this.handleCommits}
              onChange={this.handleChange}
              name="author"
              value={this.state.author}
            />
            <TextField
              id="outlined-dense"
              label="Comment"
              className={classes.textField}
              margin="dense"
              variant="outlined"
              onChange={this.handleChange}
              name="comment"
              onKeyPress={this.handleComments}
              value={this.state.comment}
            />
          </div>
        </div>
      </div>
    );
  }
}

Comments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Comments);
