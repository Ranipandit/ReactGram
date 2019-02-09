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
import { Link } from "react-router-dom";

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
  backButton: {
    margin: theme.spacing.unit
  },
  backLink: {
    textDecoration: 'none',
  },
  button: {
    margin: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
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
    margin: theme.spacing.unit * 4,
    maxWidth: 600
  }
});

class Comments extends Component {
  constructor(props) {
    super(props);
    const { commentData, location } = props;
    const { data,commentCounts } = location.state;
    this.state = {
      commentData: commentData,
      data: data,
      author: "",
      comment: "",
      commentCounts: commentCounts
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
      const { commentData, author, comment, commentCounts, data } = this.state;
      if (commentData[data.code] === undefined) {
        commentData[data.code] = [];
      }
      commentData[data.code].push({ text: comment, user: author });
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
  deleteComments = index => {
    const { commentData, commentCounts } = this.state;
    commentData.splice(index, 1);
    this.setState({
      commentData,
      commentCounts: commentCounts - 1
    });
  };

  render() {
    const { classes, location, commentData } = this.props;
    const { data } = location.state;
    const { commentCounts } = this.state;

    console.log(this.props);
    return (
      <div>
        <Header />
        <div className={classes.root}>
          {/* in this card component data is rendering by using the parents component  */}

          <Card className={classes.card}>
            <Link to="/" className={classes.backLink}>
              <Button
                variant="contained"
                color="primary"
                className={classes.backButton}
              >
                Back
              </Button>
            </Link>

            <CardMedia
              className={classes.media}
              image={"images/" + data.display_src}
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
            {/* if there is no data in the so it will return empty array else it will return 
            the data of author and comment */}
            {commentData[data.code] === undefined
              ? null
              : commentData[data.code].map((comment, index) => {
                  return (
                    <div className={classes.commentBox} key={index}>
                      <span className={classes.authorText}>{comment.user}</span>
                      <span>{comment.text}</span>
                      {/* <Delete onClick={this.deleteComments} />
                      <Divider /> */}
                    </div>
                  );
                })}

            <TextField
              id="outlined-dense"
              label="Author"
              className={classes.textField}
              margin="dense"
              variant="outlined"
              onKeyPress={this.handleComments}
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
            />
            <TextField
              id="outlined-dense"
              label="Comment"
              className={classes.textField}
              margin="dense"
              variant="outlined"
              name="comment"
              onKeyPress={this.handleComments}
              value={this.state.comment}
              onChange={this.handleChange}
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
