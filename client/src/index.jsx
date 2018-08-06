import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LandingBar from './components/LandingBar.jsx';
import Search from './components/Search.jsx';


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <LandingBar />
        <Search />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));