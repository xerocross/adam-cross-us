import React from 'react';
import './App.scss';
import headerText from './images/header-text.svg'; // with import
import TopSiteItem from "./components/TopSiteItem.jsx";

export default class App extends React.Component {
    render () {
    //https://adamcross.blog/
        return (
            <div className="App">
                <div className = "container">
                    <header className="App-header">
                        <h1><img className = "headerTextImg" alt = "Adam Cross Professional Portfolio" src = {headerText} /></h1>
                    </header>

                    <main>
                        
                        <div className = "topSites">
                            <h2>Top Sites</h2>
                            <TopSiteItem url = {("http://widgetwonk.com")} name = {"WidgetWonk"}>
                                It basically <em>is</em> my portfolio right now.  
                                        It showcases my work as a frontend developer. 
                                        I have worked primarily on frontend <em>functionality</em>: not 
                                        so much on styles.
                            </TopSiteItem>
                            <TopSiteItem url = {"https://adamcross.blog/"} name = {"My Blog"}>
                                My written-form blog.  I have written quite a lot there.  Sometimes I like to write stream-of-consciousness thoughts while I'm studying and teaching myself a topic, like when I was learning React.  I wrote several blog posts in that style on React.
                            </TopSiteItem>
                            
                            <TopSiteItem url = {"https://github.com/xerocross"} name = {"My GitHub"}>
                                I guess everyone knows what <strong>GitHub</strong> is.  I put almost all my code there.  My username there is <code>xerocross</code>.
                            </TopSiteItem>
                        </div>
                    </main>
                </div>
            </div>
        );
    }

}
