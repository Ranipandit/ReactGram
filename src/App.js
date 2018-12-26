import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Posts from './components/posts';
import Comments from './components/comments';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Posts} />
          <Route path='/comments' component={Comments} />
        </div>
      </Router>
    );
  }
}

export default App;
