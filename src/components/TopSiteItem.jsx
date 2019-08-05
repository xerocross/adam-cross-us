import React from "react";

export default class TopSiteItem extends React.Component {
    render () {
        return (
            <div className = "item">
                <h3>
                    {this.props.name} : <a href={this.props.url}>{this.props.url}</a>
                </h3>
                <p className = "description">
                    {this.props.children}
                </p>
            </div>
        );
    }
}