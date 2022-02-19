import React from "react"
import '../components.css'

function ThreadHeader({thisthread}) {

    

return(
 <div className="threadHeader">
        <div className="threadHeaderTitle">
        <h1>{thisthread.title}</h1>
        </div>
        <div className="threadHeaderSecondLine">
            Created by {thisthread.posts[0].site_user.name} at {thisthread.created_at}
        </div>
    </div>

)

}

export default ThreadHeader