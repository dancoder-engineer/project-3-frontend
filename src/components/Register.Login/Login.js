import React, {useState}  from "react"
import '../components.css'
import { NavLink } from "react-router-dom";

function Login({loginFunct, userData}) {
 //   document.querySelector("#userBox").value=""
 //   document.querySelector("#passwordBox").value=""
 //let [mess, setMess] = useState("")

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
       <br /> <br />
       {userData.name && "Successfully logged in. Please go back to the home page."}
        
    </form><br />
    <NavLink to="../">Back</NavLink>
</div>
)
}

export default Login