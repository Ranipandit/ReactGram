import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './components/posts';
import Comments from './components/comments';
import posts from './data/posts-data';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: posts
    }
  }
  likeHandler = (i) => {
    const { post } = this.state;
    post[i].likes = post[i].likes + 1
    this.setState({ post })
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={() => <Posts likeHandler={this.likeHandler} post={this.state.post} />} />
          <Route path='/comments' component={() => <Comments likeHandler={this.likeHandler} post={this.state.post}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
