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
    let url = `http://localhost:9292/threads/${id}`
    
    


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
                <PostHeader post={i} postNo={index} isMod={userData.isMod} switchBan={switchBan} />
                <PostMain post={i} />
            </div>
        )
    } )

    return postList 
}


function switchBan(id, banned){

    let url = `http://localhost:9292/banUsers/${id}`
   

    fetch (url, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        body:JSON.stringify({banned: !banned})
    })
    .then(res => res.json())
    .then(() => {
         grabPosts()
    })
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
