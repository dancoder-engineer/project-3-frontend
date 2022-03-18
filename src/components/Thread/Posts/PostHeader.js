import React from "react"
import '../../components.css'

function PostHeader({post, postNo, isMod, switchBan}) {

    let banMessage=post.site_user.banned ? "Unban this trash, sire?" : "Master, shall I ban this swine?"
    let banButton = <button onClick={handleClick}>{banMessage}</button> 
    let postNumber = <div>Post No. {postNo + 1}</div>
    //post's user is 

    function handleClick(){
        switchBan(post.site_user.id, post.site_user.banned)
    }

    function date() {
        let ampm="am"
        let year = post.created_at.substring(0,4)
        let month = post.created_at.substring(5,7)
        let day = post.created_at.substring(8,10)
        let hour=post.created_at.substring(11,13)
        if(hour > 12) {
            hour -= 12
            ampm="pm"}
        let time = post.created_at.substring(14,19)
        return `Posted on ${month}/${day}/${year} at ${hour}:${time} ${ampm}`
    }

    return(
    <div className="postHeader">
        
    <div className="postHeaderUserName"><div className={post.site_user.isMod ? "modName" : "normalUser"}>  {post.site_user.name}</div> {post.site_user.banned ? " is banned. ForKnife would like it if you laughed at them." : " "}</div>
    <div className="postHeaderTag">{post.site_user.tag}</div>
    <div className="postHeaderDate">{date()}</div>
    <div className="postHeaderPostNum">{isMod ? banButton : postNumber}</div>
    <div className="postHeaderPic"><img className="postHeaderAvatar" alt="Alt Text" src={post.site_user.avatar} /></div>
    </div>
    )
}

export default PostHeader