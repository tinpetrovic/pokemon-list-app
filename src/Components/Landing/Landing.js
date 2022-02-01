import React from "react";
import { Link } from "react-router-dom";
import "./landing.scss";
import pic from "../../Images/s-l300.jpg"



export default function Landing() {
return (
        <div className="landing-container">
            <div className="landing-wrapper">
                <h1>Pokemon Search App</h1>
                <button className="landing-button">
                    <Link to="/pokemon-fetch-app/main">
                        <img src={pic} alt="pokeball" />
                    </Link> 
                </button>
            </div>
        </div>
    )
}