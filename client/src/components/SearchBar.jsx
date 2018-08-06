import React, { Component } from 'react';
import axios from 'axios';

const DEBOUNCE_MS = 500;
// const currentSearchId = 500;

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      currentSearchId: null,
      currentSearch: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.sendQuery = this.sendQuery.bind(this);
  }
  handleSearch(e) {
    // console.log('searching', e.target.value);
    // if (this.state.currentSearchId) clearTimeout(this.state.currentSearchId);
    clearTimeout(this.state.currentSearchId);
    this.setState({currentSearch: e.target.value});
    let currentSearchId = setTimeout(this.sendQuery, DEBOUNCE_MS);
    this.setState({currentSearchId});
  }
  sendQuery() {
    // console.log(this.state.currentSearch);
    let query = this.state.currentSearch;
    axios.get('/recipes', {params: {query}})
    .then(data => console.log('received response', data))
    .catch(err => console.error(err));
  }
  render() {
    return (
      <div>
        <input onChange={this.handleSearch} placeholder="Type to search for recipes"></input>
      </div>
    )
  }
}

export default SearchBar;