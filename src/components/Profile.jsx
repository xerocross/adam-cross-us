import React from "react";
import "./Profile.scss";
import MePhoto from "./MePhoto.jsx";
export default function () {
    return (
        <div className = "Profile">
            <div className = "flexRow">
                <MePhoto />
                <p className = "AboutMe">
                    Software engineer.  Mathematician.  Web developer.
                </p>
            </div>
        </div>
    )
}