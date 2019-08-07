import React from "react";
import mePhoto from '../images/me_photo2.png';
import "./MePhoto.scss";
export default function () {
    return (
        <div className = "MePhoto">
            <iframe className = "introVid" title = "intro-vid" width="560" height="315" src="https://www.youtube.com/embed/96G7DvK7mNk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}