import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import "./TopSiteItem.scss";

export default class TopSiteItem extends React.Component {
    render () {
        return (
            <div  className = "TopSiteItem">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={this.props.eventKey} className = "toggleButton">
                        {this.props.name}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={this.props.eventKey}>
                        <Card.Body>
                            <div>
                                <a target="_blank" rel="noopener noreferrer" href={this.props.url}>{this.props.url}</a>
                            </div>
                            <div>
                                {this.props.children}
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>
        );
    }
}