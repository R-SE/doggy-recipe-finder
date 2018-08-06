import React, { Component } from 'react';
import axios from 'axios';
import ResultsDisplay from './ResultsDisplay.jsx';

const DEBOUNCE_MS = 500;

class Search extends Component {
  constructor() {
    super();
    this.state = {
      currentSearchId: null,
      currentSearch: '',
      recipes: null
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.sendQuery = this.sendQuery.bind(this);
  }
  handleSearch(e) {
    clearTimeout(this.state.currentSearchId);
    this.setState({currentSearch: e.target.value});
    let currentSearchId = setTimeout(this.sendQuery, DEBOUNCE_MS);
    this.setState({currentSearchId});
  }
  sendQuery() {
    let query = this.state.currentSearch;
    if (!query) return;
    axios.get('/recipes', {params: {query}})
    .then(({data}) => this.setState({recipes: data}, () => console.log(this.state.recipes)))
    .catch(err => console.error(err));
  }
  render() {
    return (
      <div>
        <input className="search-bar" onChange={this.handleSearch} placeholder="Type to search for recipes"></input>
        <ResultsDisplay recipes={this.state.recipes}/>
      </div>
    )
  }
}

export default Search;