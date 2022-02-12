import React from "react"
import './components.css'
import { NavLink } from "react-router-dom";

function ThreadInfo({thread}) {
    let link="/thread/"+thread.id+"/"

    return (
        <div className="threadInfo">
            {console.log(thread)}
            <div className="threadPic">
                <img className="avatar" src={thread.posts[0].site_user.avatar} />
            </div>
            <div className="threadInfoTitle">
            <NavLink to={link}>
            {thread.title}</NavLink>
            </div>
            <div className="threadInfoSecondLine">
                Created by {thread.posts[0].site_user.name} at {thread.created_at}
            </div>
            <div className="threadInfoNoOfPosts">
                Posts: {thread.posts.length}
            </div>
        </div>
    )
}

export default ThreadInfo;