import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import pic from "../../Images/s-l300.jpg"



export default function Navbar() {
return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <Link className="navbar-logo" to="/pokemon-fetch-app">
                    <img src={pic} alt="pokeball" />
                </Link>
                <h1>Pokemon Search App</h1>
            </div>
        </div>
    )
}