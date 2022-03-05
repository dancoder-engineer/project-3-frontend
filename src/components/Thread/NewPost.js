import React from "react"
import '../components.css'

function NewPost({userId, threadId, addAPost, grabPosts}) {


    function clickSubmit(e){
        e.preventDefault()
        let cont = document.querySelector("#postBox").value
        document.querySelector("#postBox").value = ""
        if (cont) {
            addAPost(userId, threadId, cont)
            grabPosts()
        }
    }

    return(
        <div>
            <input id="postBox" />
            <br />
            <button id="sub" onClick={e => clickSubmit(e)}>Submit</button>
            <br />
        </div>
    )
}

export default NewPost