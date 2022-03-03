import React from "react"
import '../../components.css'

function PostMain({post}) {

 //   console.log("main")
 //   console.log(post)
    return(
    <div>{post.content}</div>
    )
}

export default PostMain