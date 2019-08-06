import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import TopSiteItem from "./TopSiteItem.jsx";

export default class TopSites extends React.Component {
    
    render () {
        return (
            <div className = "TopSites">
                <Accordion defaultActiveKey="0">
                    <TopSiteItem 
                        url = {"https://adamcross.blog/"} 
                        name = {"My Blog"}
                        headingId = {"blogHeading"}
                        eventKey = {"0"}
                    >
                        <p className = "description">
                                My written-form blog.  I have written quite a lot there.  Sometimes I like to write stream-of-consciousness thoughts while I'm studying and teaching myself a topic, like when I was learning React.  I wrote several blog posts in that style on React.
                        </p>
                    </TopSiteItem>
                    <TopSiteItem 
                        url = {("http://widgetwonk.com")} 
                        name = {"WidgetWonk"}
                        eventKey = {"1"}
                    >
                        <p  className = "description">
                                        It basically <em>is</em> my portfolio right now.  
                                        It showcases my work as a frontend developer. 
                                        I have worked primarily on frontend <em>functionality</em>: not 
                                        so much on styles.
                        </p>
                    </TopSiteItem>
                    <TopSiteItem 
                        url = {("https://github.com/xerocross")} 
                        name = {"GitHub"}
                        eventKey = {"https://github.com/xerocross"}
                    >
                        <p  className = "description">
                            This is my GitHub.  I put almost everything I write on there.  Bear in mind that some of it is 
                            quite old and I've gotten better as a programmer in the meantime.
                        </p>
                    </TopSiteItem>
                </Accordion>
            </div>
        )
    }

}