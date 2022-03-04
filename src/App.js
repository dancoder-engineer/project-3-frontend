import './App.css';
import React, {useState, useEffect} from "react"
import ThreadsAll from "./components/MainPage/ThreadsAll.js"
import NewThread from "./components/MainPage/NewThread.js"
import Thread from "./components/Thread.js"
import Login from "./components/Register.Login/Login.js"
import LogOut from "./components/Register.Login/LogOut.js"
import Register from "./components/Register.Login/Register.js"
import { Routes, Route } from 'react-router-dom';

function App() {
 // const [loggedInSpiel, setLoggedInSpiel] = useState("")
  //const [userName, setUserName] = useState("")
  //let userName=""
  const [userData, setUserData] = useState({
    name: ""
  })
  //let userData = {}




  function loginFunct (username, password) {
    
      fetch (`http://localhost:9293/users/${username}/`)
      .then (res=>res.json())	
      .then(data => {
        if (data.length !== 0) {
          if (data[0].password === password) {
            setUserData(data[0])
            return true
          }
          else {return false}
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
      element={<ThreadsAll userName={userData.name} />} 
    />
    <Route path="/thread/:id"
      element={<Thread userData={userData} />} 
    />
    <Route path="/login/"
      element={<Login loginFunct={loginFunct} userData={userData} />} />
    <Route path="/logout/"
      element={<LogOut logOutFunct={logOutFunct} />} />
    <Route path="/register/"
    element={<Register />} />
    <Route path="/newthread/"
    element={<NewThread />} />

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