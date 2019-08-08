import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import TopSiteItem from "./TopSiteItem.jsx";
import "./TopSites.scss";

export default class TopSites extends React.Component {
    render () {
        return (
            <div className = "TopSites">
                <h2>Most Important Stuff</h2>
                <Accordion defaultActiveKey="0">
                    <TopSiteItem 
                        url = {("http://widgetwonk.com")} 
                        name = {"WidgetWonk"}
                        eventKey = {"0"}
                    >
                        <p  className = "description">
                                        This basically <em>is</em> my frontend portfolio.  It spans <strong>VueJS</strong>, <strong>React</strong>, <strong>AngularJS</strong>, a lot of other important frontend
                                        techniques and libraries, and some light backend work using <strong>Node</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.
                        </p>
                    </TopSiteItem>
                    <TopSiteItem 
                        url = {"https://adamcross.blog/"} 
                        name = {"Written Blog"}
                        headingId = {"blogHeading"}
                        eventKey = {"1"}
                    >
                        <p className = "description">
                                My written-form blog on software development.  Until now, it has mainly focused on frontend web development.  I have written quite a lot there.
                        </p>
                    </TopSiteItem>
                    <TopSiteItem 
                        url = {("https://github.com/xerocross")} 
                        name = {"GitHub"}
                        eventKey = {"3"}
                    >
                        <p  className = "description">
                            My GitHub.  I'm <code>xerocross</code>.  I put almost everything I write on there.
                        </p>
                    </TopSiteItem>
                    <TopSiteItem 
                        url = {("https://www.youtube.com/channel/UCpPMzmPnToOYX-UvB3rFfLQ")} 
                        name = {"YouTube Channel"}
                        eventKey = {"4"}
                    >
                        <p  className = "description">
                            I just started making YouTube videos recently (late 2019).  For now they focus mainly on JavaScript and web dev.
                        </p>
                    </TopSiteItem>
                    <TopSiteItem 
                        url = {("https://twitter.com/adamfgcross")} 
                        name = {"Twitter"}
                        eventKey = {"5"}
                    >
                        <p  className = "description">
                            I'm @adamfgcross on Twitter.  I actively encourage communication from people I don't know yet, so feel free to contact me there.  Also I micro-blog a lot on Twitter.
                        </p>
                    </TopSiteItem>
                </Accordion>
            </div>
        )
    }

}