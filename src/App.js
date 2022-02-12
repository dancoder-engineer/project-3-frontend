import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"
import ThreadInfo from "./components/AppThreadInfo.js"
import ThreadsAll from "./components/AppThreadsAll.js"
import { Routes ,Route } from 'react-router-dom';

function App() {

  const [threads, setThreads] = useState([])
  useEffect(() => {
    fetch ("http://localhost:9293/threads/")
    .then (res=>res.json())	
    .then(data => {setThreads(
      data.map(i => <ThreadInfo thread={i} key={i.id} />)
    )
    })
  },[])


  return (
    <Routes>
    <Route path="/" exact
      element={<ThreadsAll threads={threads} />} 
    />
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