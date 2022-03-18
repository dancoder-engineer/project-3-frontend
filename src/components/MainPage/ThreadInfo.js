import React from "react"
import '../components.css'
import { NavLink } from "react-router-dom";

function ThreadInfo({thread}) {
    let link="/thread/"+thread.id+"/"

    function date() {
        let ampm="am"
        let year = thread.created_at.substring(0,4)
        let month = thread.created_at.substring(5,7)
        let day = thread.created_at.substring(8,10)
        let hour=thread.created_at.substring(11,13)
        if(hour > 12) {
            hour -= 12
            ampm="pm"}
        let time = thread.created_at.substring(14,19)
        return `${month}/${day}/${year} at ${hour}:${time} ${ampm}`
    }
    
//    console.log(thread)

    return (
        <div className="threadInfo">
            <div className="threadPic">
                <img className="avatar" alt="Alt Text" src={thread.posts[0].site_user.avatar} />
            </div>
            <div className="threadInfoTitle">
            <NavLink to={link}>
            {thread.title}</NavLink>
            </div>
            <div className="threadInfoSecondLine">
                Created by {thread.posts[0].site_user.name} on {date()}
            </div>
            <div className="threadInfoNoOfPosts">
                Posts: {thread.posts.length}
            </div>
        </div>
    )
}

export default ThreadInfo;