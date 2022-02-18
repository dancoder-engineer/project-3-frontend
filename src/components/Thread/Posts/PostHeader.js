import React from "react"
import '../../components.css'

function PostHeader({post, postNo}) {


    return(
    <div className="postHeader">
        
    <div className="postHeaderUserName"><div className={post.site_user.isMod ? "modName" : "normalUser"}>  {post.site_user.name}</div> {post.site_user.banned ? " is banned. ForKnife would like it if you laughed at them." : " "}</div>
    <div className="postHeaderTag">{post.site_user.tag}</div>
    <div className="postHeaderDate">Posted {post.created_at}</div>
    <div className="postHeaderPostNum">Post No. {postNo + 1}</div>
    <div className="postHeaderPic"><img className="postHeaderAvatar" alt="Alt Text" src={post.site_user.avatar} /></div>
    </div>
    )
}

export default PostHeader