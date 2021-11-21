import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/Rightbar/Rightbar'
// import Profileright from '../../Components/Profilerightbar/Profileright'
import "./Profile.css"

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profilepage">
                <Sidebar className="profileside" />
                <div className="profileright">
                    <div className="profilerighttop">
                        <div className="profilecover">
                            <img src="/assests/posts/3.jpeg" alt="error"  className="profilecoverimg" />
                            <img src="/assests/person/7.jpeg" alt="error" className="profilepicimg" />
                        </div>
                        <div className="profileinfo">
                            <h4 className="personname">XYX shukla</h4>
                            <span className="persondesc">XYZ description </span>
                        </div>
                    </div>
                    <div className="profilerightbuttom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}
