import React from "react"
import '../components.css'

function NewThread({userData, createThread}) {

    function clickSubmit(e) {
        e.preventDefault()
        let title=document.querySelector("#nameBox").value
        let cont=document.querySelector("#postBox").value
        createThread(title, cont)
    }

    return(
        <div>
            <h3>New Thread</h3>
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