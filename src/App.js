import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light">
          <label className="navbar-brand" htmlFor="">
            <strong>Monsters</strong> Inc
          </label>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2 "
                type="search"
                placeholder="Search monsters"
                aria-label="Search"
                onChange={(e) => this.setState({ searchField: e.target.value })}
              />
            </form>
          </div>
        </nav>
        <h1>Monster's Yellowpages</h1>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
