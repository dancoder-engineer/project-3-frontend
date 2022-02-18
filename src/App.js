import './App.css';
import React, {useState, useEffect} from "react"
import ThreadsAll from "./components/MainPage/ThreadsAll.js"
import Thread from "./components/Thread.js"
import Login from "./components/Register.Login/Login.js"
import LogOut from "./components/Register.Login/LogOut.js"
import Register from "./components/Register.Login/Register.js"
import { Routes ,Route } from 'react-router-dom';

function App() {
  const [loggedInSpiel, setLoggedInSpiel] = useState("User is not Logged In")
  const [userName, setUserName] = useState("Not Logged In")
  const [threads, setThreads] = useState([])

  useEffect(() => {
    fetch ("http://localhost:9293/threads/")
    .then (res=>res.json())	
    .then(data => {setThreads(data) 
  
    })
  },[])


  function loginFunct (username, password) {
   // console.log(`UserName: ${username} Password: ${password}`)
    
      fetch (`http://localhost:9293/users/${username}/`)
      .then (res=>res.json())	
      .then(data => {
        
        if (data.length !== 0) {
          if (data[0].password === password) {
            setUserName(username)
            setLoggedInSpiel(`Logged in as ${username}`)
            console.log(data)
          }
        }
      } )
    
  }

  function logOutFunct () {
    setUserName("Not Logged In")
    setLoggedInSpiel("User is not Logged In")
  }




  return (
    <Routes>
    <Route path="/" exact
      element={<ThreadsAll userName={userName} loggedInSpiel={loggedInSpiel} threads={threads} />} 
    />
    <Route path="/thread/:id"
      element={<Thread threads={threads}/>} 
    />
    <Route path="/login/"
      element={<Login loginFunct={loginFunct}/>} />
    <Route path="/logout/"
      element={<LogOut logOutFunct={logOutFunct} />} />
    <Route path="/register/"
    element={<Register />} />
  </Routes>
  );
}

export default App;

/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */