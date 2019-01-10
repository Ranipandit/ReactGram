import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './components/posts';
import Comments from './components/comments';
import posts from './data/posts-data';


class App extends Component {
  // all post data are in state
  constructor(props) {
    super(props)
    const { data } = this.props.location.post
    this.state = {
      post: posts,
      postIndex: data
    }
  }

  // like function to increase the likes of the card
  likeHandler = i => {
    const {post} = this.state
    post[i].likes = post[i].likes + 1
    this.setState({ post })
  }
  render() {
    // this is the main component where the Post and Comment routes are their.
    // Here using lifting state up to pass the data parent data while clicking on child component.
    return (
      <Router>
        <div>
          <Route exact path='/' component={() => <Posts likeHandler={this.likeHandler} post={this.state.post} />} />
          <Route path='/comments' component={() => <Comments likeHandler={this.likeHandler} postIndex={this.state.postIndex} />} />
        </div>
      </Router>
    );
  }
}

export default App;
