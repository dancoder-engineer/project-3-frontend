import React from "react"
import './components.css'
import ThreadHeader from "./Thread/ThreadHeader";
import PostHeader from "./Thread/Posts/PostHeader.js";
import PostMain from "./Thread/Posts/PostMain.js";
import { useParams, NavLink } from "react-router-dom"



function Thread({threads}) {
    let { id } = useParams();
    let thisthread = threads[id-1];
    console.log(thisthread.posts);

    let posts = thisthread.posts.map((i, index) => {
        return(
            <div className="postDiv">
                <PostHeader post={i} postNo={index} />
                <PostMain post={i} />
            </div>
        )
    } )



    return(
   <div>
       <ThreadHeader thisthread={thisthread} />
       {posts}
        <br />
       <NavLink to="../../">Back to the main page</NavLink>
    </div>
    )
}

export default Thread
