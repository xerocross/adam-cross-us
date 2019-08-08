import React from "react";
import "./ContactMe.scss";
import TwitterIcon from "../images/twitter-icon.png";
import LinkedInIcon from "../images/linkedin-icon.png";
import YouTubeIcon from "../images/youtube-icon.png";

export default function () {
    return (
        <div className = "ContactMe">
            <p className = "info">
                If you want to contact me and/or stalk me online, these are your options.
                I'm not on Facebook, and I just&hellip;don't have the email, so&hellip;
            </p>
            <div className = "socialMediaBar">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/adam_fg_cross">
                    <img 
                        className = "icon twitter" 
                        alt = "Twitter Icon" 
                        src = {TwitterIcon}
                    />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/xerocross/">
                    <img 
                        className = "icon linkedin" 
                        alt = "LinkedIn Icon" 
                        src = {LinkedInIcon}
                    />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCpPMzmPnToOYX-UvB3rFfLQ">
                    <img 
                        className = "icon youtube" 
                        alt = "YouTube Icon" 
                        src = {YouTubeIcon}
                    />
                </a>
            </div>
        </div>
    )
}