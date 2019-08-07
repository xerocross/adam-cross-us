import React from "react";
import "./MePhoto.scss";
import Config from "../config.js";
const introVidConfig = Config.introVidConfig;
export default function () {
    return (
        <div className = "MePhoto">
            <iframe className = "introVid" title = "intro-vid" width="560" height="315" src={introVidConfig.src} frameBorder="0" allow={introVidConfig.allow} allowFullScreen></iframe>
        </div>
    )
}