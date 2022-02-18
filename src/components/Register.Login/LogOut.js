import React from "react"
import '../components.css'
import { NavLink } from "react-router-dom";

function LogOut({logOutFunct}) {

    logOutFunct()

return(
    <div id="logout">
        <h1>Logged out</h1><br />
        <h2><NavLink to="../">Back to the main page</NavLink></h2>
    </div>
)

}

export default LogOut