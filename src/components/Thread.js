import React, { useState, useEffect } from "react"
import './components.css'
import ThreadHeader from "./Thread/ThreadHeader";
import PostHeader from "./Thread/Posts/PostHeader.js";
import PostMain from "./Thread/Posts/PostMain.js";
import NewPost from "./Thread/NewPost.js";
import { useParams, NavLink } from "react-router-dom"

function Thread({userData, addAPost}) {
    let { id } = useParams();
    const [ThisThread, setThisThread] = useState(null)
    let url = `http://localhost:9293/threads/${id}/`
    
    


    useEffect(() => grabPosts()
    ,[])

    

    function grabPosts() {
        fetch(url)
        .then (res=>res.json())	
        .then (data => { 
            setThisThread(data)
    })
    }
    
    function makePosts() {

    let postList = ThisThread.posts.map((i, index) => {
        return(
            <div className="postDiv" key={index}>
                <PostHeader post={i} postNo={index} />
                <PostMain post={i} />
            </div>
        )
    } )

    return postList 
}



    return(
   <div>
       {ThisThread && <ThreadHeader thisthread={ThisThread} postZero={ThisThread.posts}/>}
      {ThisThread && makePosts()}
        <br />
        {userData.name && <NewPost userId={userData.id} threadId={id} addAPost={addAPost} grabPosts={grabPosts}/>}
       <NavLink to="../../">Back to the main page</NavLink>
       <br />
    </div>
    )
}

export default Thread
