import "./Post.css"
import {MoreVert} from "@mui/icons-material"
import {Users} from "../../dummyData"
import {useState} from "react"

export default function Post({post}) {
//    const user = Users.filter((u)=> u.id === post.userId)
//     console.log(user);

     const[like , setLike]  = useState(post.like);
     const[isLike , setIsLike]  = useState(false);
   
      const likehandler = ()=>{
          setLike(isLike ? like-1 : like+1)
          setIsLike(!isLike)
      } 

    return (
        <div>
            <div className="postcontainer">
                <div className="posttop">
                    <div className="posttopleft">
                        <img src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt="Error" className="posttopleftimg" />
                        <h5 className="postname" >{Users.filter((u)=> u.id === post.userId)[0].username}</h5>
                        <span className="minago">{post.date}</span>
                    </div>
                    <div className="posttopright">
                        <MoreVert className="moreinfo" />
                    </div>
                </div>
                <div className="postcenter">
                    <div>
                    <span className="postcentertext">{post?.desc}</span>
                    </div>
                    <img src={post.photo} alt="Error" className="postcenterimg" />
                </div>
                <div className="postbuttom">
                    <div className="postbuttomleft">
                     <img src="/assests/heart.png" alt="Error" onClick={likehandler}  className="postheart" />
                     <img src="/assests/like.png" alt="Error" onClick={likehandler} className="postlike" />
                     <span className="likecount">{like} like</span>
                    </div>
                    <div className="postbuttomright">
                       <span className="postcomment">{post.comment} comment yet</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
