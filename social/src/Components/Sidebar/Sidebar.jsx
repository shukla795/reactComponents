import "./Sidebar.css"
import {Feed , Chat , VideoStable ,Group , Bookmark ,LiveHelp ,EmojiEmotions
    , Event , GavelTwoTone} from "@mui/icons-material"

    import {Users} from "../../dummyData"
    import Friend from "../closeFriend/Friend"        
export default function Sidebar() {
    return (
        <>
            <div className="sidebarcontainer">
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">
                     <Feed className="itemicon" />
                     <span className="itemtext" >Feed</span>         
                    </li>
                    <li className="sidebarlistitem">
                     <Chat className="itemicon" />
                     <span className="itemtext" >Chats</span>         
                    </li>
                    <li className="sidebarlistitem">
                     <VideoStable className="itemicon" />
                     <span className="itemtext" >Videos</span>         
                    </li>
                    <li className="sidebarlistitem">
                     <Group className="itemicon" />
                     <span className="itemtext" >Groups</span>         
                    </li>
                    <li className="sidebarlistitem">
                     <VideoStable className="itemicon" />
                     <span className="itemtext" >Videos</span>         
                    </li>
                    <li className="sidebarlistitem">
                     <Bookmark className="itemicon" />
                     <span className="itemtext" >Bookmarks</span>         
                    </li>
                    <li className="sidebarlistitem">
                     <LiveHelp className="itemicon" />
                     <span className="itemtext" >Questions</span>         
                    </li>
                    <li className="sidebarlistitem">
                     <EmojiEmotions className="itemicon" />
                     <span className="itemtext" >Jobs</span>         
                    </li>
                    <li className="sidebarlistitem">
                     <Event className="itemicon" />
                     <span className="itemtext" >Events</span>         
                    </li>
                    <li className="sidebarlistitem">
                     <GavelTwoTone className="itemicon" />
                     <span className="itemtext" >Courses</span>         
                    </li>
                </ul>
                <button className="showmore">Show More</button>
                <hr />
               
                <ul className="sidebarfriends">
                    {
                        Users.map((u)=>(
                            <Friend key={u.id}  user={u} />
                        ))
                    }
                </ul>

            </div>
        </>
    )
}
