import React, { Component } from 'react';
import Header from './components/header';
import Posts from './components/card';

class App extends Component {
  render() {
    return (
      <div>
        < Header />
        < Posts />
      </div>
    );
  }
}

export default App;
