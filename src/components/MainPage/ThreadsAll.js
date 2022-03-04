import React from "react"
import AppHeader from "./MainPageHeader.js"
import ThreadInfo from "./ThreadInfo.js"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

function ThreadsAll({userName}) {

 
  const [threadsMap, setThreadsMap] = useState([])

  useEffect(() => {
    grabThreads()
  },[])

  function grabThreads() {
    fetch ("http://localhost:9293/threads/")
    .then (res=>res.json())	
    .then(data => {
      setThreadsMap(data.map(i => <ThreadInfo thread={i} key={i.id} />))
    })
  }

  

    return (
        <div className="App">
        <AppHeader userName={userName} />
        {threadsMap && threadsMap}
        <br /> <br />
        {userName && <NavLink to="/newthread/">New Thread</NavLink>}
      </div>
    )
}

export default ThreadsAll