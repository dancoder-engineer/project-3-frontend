import React from "react"
import AppHeader from "./MainPageHeader.js"
import ThreadInfo from "./ThreadInfo.js"

function ThreadsAll({threads, loggedInSpiel, userName}) {

  let threadsMap = threads.map(i => <ThreadInfo thread={i} key={i.id} />)

    return (
        <div className="App">
        <AppHeader userName={userName} loggedInSpiel={loggedInSpiel} />
        {threadsMap}
      </div>
    )
}

export default ThreadsAll