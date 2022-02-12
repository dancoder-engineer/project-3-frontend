import React from "react"
import './components.css'

function AppHeader() {

    return (
        <div id="MainHeader">
        <div id="regLink">Register</div>
        <div id="loginLink">Login</div>
        <div id="mainTitle">
            <img className="neilCaffreyA" src="https://upload.wikimedia.org/wikipedia/en/6/6d/Neal_Caffrey_White_Collar.jpg" />
                 NeilCaff     
            <img className="neilCaffreyB" src="https://upload.wikimedia.org/wikipedia/en/6/6d/Neal_Caffrey_White_Collar.jpg" />
            </div>
        </div>
    )
}

export default AppHeader