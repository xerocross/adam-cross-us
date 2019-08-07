import React from 'react';
import headerText from '../images/header-text.svg'; // with import
import TopSites from "./TopSites.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from "./Profile.jsx";

export default class MainLayout extends React.Component {
    componentDidMount () {
        const img = new Image();
        img.src = headerText;
    }
    render () {
        return (
            <div className="App">
                <div className = "container">
                    <header className="App-header">
                        <h1><img className = "headerTextImg" alt = "Adam Cross Professional Portfolio" src = {headerText} /></h1>
                    </header>
                    <main>
                        <Row>
                            <Col md = {6} ><Profile /></Col>
                            <Col md={6} ><TopSites /></Col>
                        </Row>
                    </main>
                </div>
            </div>
        );
    }

}
