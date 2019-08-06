import React from 'react';
import './App.scss';
import MainLayout from "./components/MainLayout.jsx";


export default class App extends React.Component {

    render () {
        return (
            <div className="App">
                <MainLayout />
            </div>
        );
    }

}
