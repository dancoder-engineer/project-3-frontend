import React, {useState} from "react"
import '../components.css'
import { NavLink } from "react-router-dom";

function Register() {
    let [mess, setMess] = useState("")
    //let [showMessage, setShowMessage] = useState(false)
    let emptyDiv=<div><br /></div>
    let passWrong=<div><br />{mess}<br /><br /></div>

    
    function clickd(testUser) {

  
        fetch (`http://localhost:9293/users/`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(testUser)
        })
    }


    function handleSubmit(e){
        e.preventDefault()
        let newUsr = {
             name: document.querySelector("#userName").value,
             tag: document.querySelector("#tag").value,
             avatar: document.querySelector("#avatar").value,
             email: document.querySelector("#email").value,
             password:document.querySelector("#passw1rd").value,
             banned: false,
             isMod: false
        }
        if (document.querySelector("#passw1rd").value === document.querySelector("#p2ssword").value) { 
            clickd(newUsr)
            setMess("User created. Please go back to the main page.")
        }
        else { 
            setMess("The passwords don't match.")
        }
    }

return(
   <div>
       Register<br />
       <form>
            User Name: <input id="userName" /> <br />
            Tag: <input id="tag" /> <br />
            Avatar URL: <input id="avatar" /> <br />
            E-Mail Address: <input id="email" /> <br />
            Password: <input id="passw1rd" /> <br />
            Repeat Password: <input id="p2ssword" /> <br />
            {mess &&  <div><br />{mess}<br /><br /></div> }
            <button onClick={e => handleSubmit(e)}>Submit</button>
       </form><br />
       <NavLink to="../">Back to the main page</NavLink>
    </div>
    
)
}

export default Register