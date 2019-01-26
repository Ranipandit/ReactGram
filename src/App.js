import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Posts from "./components/posts";
import Comments from "./components/comments";
import posts from "./data/posts-data";
import comments from "./data/comments-data";

class App extends Component {
  // all post data are in state
  constructor(props) {
    super(props);
    this.state = {
      post: posts,
      commentData: comments,
    };
  }

  // like function to increase the likes of the card
  likeHandler = data => {
    data.likes = data.likes + 1;
    this.setState({ data });
  };

  render() {
    // this is the main component where the Post and Comment routes are their.
    // Here using lifting state up to pass the data parent data while clicking on child component.
    return (
      <Router basename="ReactGram">
        <div>
          <Route
            exact
            path="/"
            component={props => (
              <Posts
                likeHandler={this.likeHandler}
                post={this.state.post}
                commentData = {this.state.commentData}
                {...props}
              />
            )}
          />
          <Route
            path="/comments"
            component={props => (
              <Comments 
              likeHandler={this.likeHandler} 
              commentData = {this.state.commentData}
              {...props} 
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
