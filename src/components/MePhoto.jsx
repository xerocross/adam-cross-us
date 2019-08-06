import React from "react";
import mePhoto from '../images/me_photo2.png';
import "./MePhoto.scss";
export default function () {
    return (
        <div className = "MePhoto">
            <img src={mePhoto} width = "1600" height = "1600" alt = "a face pic of me, Adam Cross"/>
        </div>
    )
}