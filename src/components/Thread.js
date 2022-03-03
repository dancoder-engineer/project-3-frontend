import React, { useState, useEffect } from "react"
import './components.css'
import ThreadHeader from "./Thread/ThreadHeader";
import PostHeader from "./Thread/Posts/PostHeader.js";
import PostMain from "./Thread/Posts/PostMain.js";
import NewPost from "./Thread/NewPost.js";
import { useParams, NavLink, useSearchParams } from "react-router-dom"

function Thread({userData}) {
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

function addAPost(userId, threadId, cont) {
    console.log(userId)
    console.log(threadId)
    console.log(cont)

    let postData = {
        site_user_id: userId,
        post_group_id: threadId,
        content: cont
    }

    fetch (`http://localhost:9293/posts/`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(postData)
        })
        .then(() => grabPosts())



}

    return(
   <div>
       {ThisThread && <ThreadHeader thisthread={ThisThread} postZero={ThisThread.posts}/>}
      {ThisThread && makePosts()}
        <br />
        <NewPost userId={userData.id} threadId={id} addAPost={addAPost}/>
       <NavLink to="../../">Back to the main page</NavLink>
       <br />
    </div>
    )
}

export default Thread
