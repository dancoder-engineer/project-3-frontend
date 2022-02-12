import React from "react"
import AppHeader from "./AppHeader.js"

function ThreadsAll({threads}) {

    return (
        <div className="App">
        <AppHeader />
        {threads}
      </div>
    )
}

export default ThreadsAll