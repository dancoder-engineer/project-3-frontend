import React from "react"
import '../components.css'

function NewThread() {

    return(
        <div>
            <input id="nameBox" />
            <br />
            <input id="postBox" />
            <br />
            <button id="sub" onClick={e => clickSubmit(e)}>Submit</button>
            <br />
        </div>
    )

}

export default NewThread