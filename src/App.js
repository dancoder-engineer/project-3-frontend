import './App.css';
import React, {useState, useEffect} from "react"
import ThreadsAll from "./components/MainPage/ThreadsAll.js"
import Thread from "./components/Thread.js"
import Login from "./components/Register.Login/Login.js"
import LogOut from "./components/Register.Login/LogOut.js"
import Register from "./components/Register.Login/Register.js"
import { Routes, Route } from 'react-router-dom';

function App() {
 // const [loggedInSpiel, setLoggedInSpiel] = useState("")
  //const [userName, setUserName] = useState("")
  //let userName=""
  const [threads, setThreads] = useState([])
  const [userData, setUserData] = useState({
    name: ""
  })
  //let userData = {}

  useEffect(() => {
    fetch ("http://localhost:9293/threads/")
    .then (res=>res.json())	
    .then(data => {setThreads(data) 
  
    })
  },[])


  function loginFunct (username, password) {
    
      fetch (`http://localhost:9293/users/${username}/`)
      .then (res=>res.json())	
      .then(data => {
     //   console.log(data[0].password === password)
        if (data.length !== 0) {
          if (data[0].password === password) {
           // userData = data[0]
            setUserData(data[0])
           // console.log(data)
          }
        }
      } )
    
  }

  function logOutFunct () {
    setUserData({
      name: ""
    })
  //  setLoggedInSpiel("User is not Logged In")
  }




  return (
    <Routes>
    <Route path="/" exact
      element={<ThreadsAll userName={userData.name} threads={threads} />} 
    />
    <Route path="/thread/:id"
      element={<Thread userData={userData} />} 
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