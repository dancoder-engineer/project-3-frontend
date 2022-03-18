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

  const [userData, setUserData] = useState({
    name: ""
  })

  function addAPost(userId, threadId, cont) {

    let postData = {
        site_user_id: userId,
        post_group_id: threadId,
        content: cont
    }

    fetch (`http://localhost:9292/posts`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(postData)
        })
        .then (res=>res.json())	



}


  function loginFunct (username, password) {
    
      return fetch (`http://localhost:9292/users/${username}`)
      .then (res=>res.json())	
      .then(data => {
        if (data.length !== 0) {
          if (data[0].password === password) {
            setUserData(data[0])
          }
        }
      } )
    
  }

  function logOutFunct () {
    setUserData({
      name: ""
    })
  }



  return (
    <Routes>
    <Route path="/" exact
      element={<ThreadsAll  userData={userData} addAPost={addAPost} />} 
    />
    <Route path="/thread/:id"
      element={<Thread userData={userData} addAPost={addAPost} />} 
    />
    <Route path="/login/"
      element={<Login loginFunct={loginFunct} userData={userData} />} />
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