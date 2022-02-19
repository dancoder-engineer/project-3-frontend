import React from "react"
import '../components.css'
import { NavLink } from "react-router-dom";

function AppHeader({userName, loggedInSpiel}) {

    let loginLink=<NavLink to="/login/">Log In</NavLink>
    let logOutLink=<NavLink to="/logout/">Log Out</NavLink>
    let registerLink=<NavLink to="/register/">Register</NavLink>
    let NullLink=<div></div>



    return (
        <div id="MainHeader">
        <div id="regLink">{userName !=="Not Logged In" ? NullLink : registerLink}</div>
        <div id="loggedInSpiel">{loggedInSpiel}</div>
        <div id="loginLink">{userName !=="Not Logged In" ? logOutLink : loginLink}</div>
        <div id="mainTitle">
            <img className="neilCaffreyA" alt=" " src="https://upload.wikimedia.org/wikipedia/en/6/6d/Neal_Caffrey_White_Collar.jpg" />
            NeilCaff
            <img className="neilCaffreyB" alt=" " src="https://upload.wikimedia.org/wikipedia/en/6/6d/Neal_Caffrey_White_Collar.jpg" />
            </div>
        </div>
    )
}

export default AppHeader