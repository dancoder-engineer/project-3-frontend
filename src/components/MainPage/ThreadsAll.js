import React from "react"
import AppHeader from "./MainPageHeader.js"
import ThreadInfo from "./ThreadInfo.js"
import { useEffect, useState } from "react"
import NewThread from "./NewThread.js"

function ThreadsAll({userData, addAPost}) {

 
  const [threadsMap, setThreadsMap] = useState([])

  function createThread(title, cont) {
    let newThread={
      title: title
    }

    fetch (`http://localhost:9293/threads/`, {
      method: 'post',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body:JSON.stringify(newThread)
  })
  .then(res => res.json())
  .then(data => 
    {addAPost(userData.id, data.id, cont)
    grabThreads()})
  
  }
  //addAPost(userId, threadId, cont)

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
        <AppHeader userData={userData} />
        {threadsMap && threadsMap}
        <br /> <br />
        {userData.name && <NewThread userData={userData} createThread={createThread} />}
      </div>
    )
}

export default ThreadsAll