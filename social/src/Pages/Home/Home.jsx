import React from 'react'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/Rightbar/Rightbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Topbar from '../../Components/Topbar/Topbar'
import "./Home.css"

function Home() {
    return (
        <>
            <Topbar />
           <div className="homecontainer">
            <Sidebar />
            <Feed />
            <Rightbar />
           </div>
        </>
    )
}

export default Home
