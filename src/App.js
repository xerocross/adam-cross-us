import React from 'react';
import './App.scss';
import headerText from './images/header-text.svg'; // with import

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className = "container">
        <header className="App-header">
          <img className = "headerTextImg" alt = "Adam Cross Professional Portfolio" src = {headerText} />
        </header>
        </div>
      </div>
    );
  }

}
