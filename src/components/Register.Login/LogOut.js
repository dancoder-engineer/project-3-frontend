import React, {useEffect} from "react"
import '../components.css'
import { NavLink, useNavigate } from "react-router-dom";

function LogOut({logOutFunct}) {

    const navigate=useNavigate()

    useEffect(() => 
    {
        logOutFunct()
        setTimeout(() => {navigate("../")}, 1000)
    }, [])

return(
    <div id="logout">
        <h1>Logged out</h1><br />
    </div>
)

}

export default LogOut