import React from "react"
import '../components.css'
import { NavLink } from "react-router-dom";

function Login({loginFunct}) {
 //   document.querySelector("#userBox").value=""
 //   document.querySelector("#passwordBox").value=""

    function values() {
        let user=document.querySelector("#userBox")
        let pass=document.querySelector("#passwordBox")
        loginFunct(user.value, pass.value)
    }

    function triggerValues(e) {
        e.preventDefault()
        values()
    }

    return (
<div>
    <form>
       User Name: <input id="userBox" /> <br />
       Password:  <input id="passwordBox" type="password" />
       <br /> <br />
       <button onClick={e => triggerValues(e)}>Submit</button>
    </form><br />
    <NavLink to="../">Back</NavLink>
</div>
)
}

export default Login