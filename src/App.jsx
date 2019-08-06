import React from 'react';
import './App.scss';
import headerText from './images/header-text.svg'; // with import
import TopSites from "./components/TopSites.jsx";
import Disclaimer from "./components/Disclaimer.jsx";

export default class App extends React.Component {
    componentDidMount () {
        const img = new Image();
        img.src = headerText;
    }
    render () {
        return (
            <div className="App">
                <Disclaimer />
                <div className = "container">
                    
                    <header className="App-header">
                        <h1><img className = "headerTextImg" alt = "Adam Cross Professional Portfolio" src = {headerText} /></h1>
                    </header>
                    <main>
                        <TopSites />
                    </main>
                </div>
            </div>
        );
    }

}
