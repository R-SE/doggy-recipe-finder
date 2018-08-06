import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LandingBar from './components/LandingBar.jsx';
import SearchBar from './components/SearchBar.jsx';
import ResultsDisplay from './components/ResultsDisplay.jsx';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        My App
        <LandingBar />
        <SearchBar />
        <ResultsDisplay />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));