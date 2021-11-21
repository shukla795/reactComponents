import Post from "../Post/Post"
import Share from "../Share/Share"
import "./Feed.css"
import {Posts} from "../../dummyData"
function Feed() {
    return (
        <>
            <div className="feedbarcontainer">
                <Share />
                {
                    Posts.map(p=>(
                        <Post key={p.id} post={p} />
                    ))}
                
            </div>
         </>   
    )
}

export default Feed
