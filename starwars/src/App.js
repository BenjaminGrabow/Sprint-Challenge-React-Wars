import React, { Component } from 'react';
import './App.css';
import StarWarsList from "./components/StarWarsList";
import NextPage from './components/NextPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      pageNumber: 0,
      url: 'https://swapi.co/api/people/?page=',
    };
  }

  nextPage = (pageNumber, url) => {
    this.getCharacters(`${url}${pageNumber + 1}`)

    this.setState({ pageNumber: this.state.pageNumber +1
    })};

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <NextPage
          url={this.state.url}
          pageNumber={this.state.pageNumber}
          nextPage={this.nextPage}
        />
        <StarWarsList
          starWarsState={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
