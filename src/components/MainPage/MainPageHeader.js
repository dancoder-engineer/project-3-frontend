import React from "react"
import '../components.css'
import { NavLink } from "react-router-dom";

function AppHeader({userData}) {

    let loginLink=<NavLink to="/login/">Log In</NavLink>
    let logOutLink=<NavLink to="/logout/">Log Out</NavLink>
    let registerLink=<NavLink to="/register/">Register</NavLink>
    let NullLink=<div></div>



    return (
        <div id="MainHeader">
        <div id="regLink">{userData.name ? NullLink : registerLink}</div>
        <div id="loggedInSpiel">{userData.name ? `Logged in as ${userData.name}` : "User is not logged In"}</div>
        <div id="loginLink">{userData.name ? logOutLink : loginLink}</div>
        <div id="mainTitle">
            <img className="neilCaffreyA" alt=" " src="https://upload.wikimedia.org/wikipedia/en/6/6d/Neal_Caffrey_White_Collar.jpg" />
            NeilCaff
            <img className="neilCaffreyB" alt=" " src="https://upload.wikimedia.org/wikipedia/en/6/6d/Neal_Caffrey_White_Collar.jpg" />
            </div>
        </div>
    )
}

export default AppHeader