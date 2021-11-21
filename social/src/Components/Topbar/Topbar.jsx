import "./Topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
function Topbar() {
    return (
        <>
            <div className="topbarContainer">
                <div className="topbarleft">
                    <span className="logo">LamaSocial</span>
                </div>
                <div className="topbarcenter">
                    <Search className="logoSearch" />
                    <input type="text" className="searchInput" placeholder="Search Your Friends..." />
                </div>
                <div className="topbarright">
                    <div className="somedata">
                        Welcome Back
                    </div>
                    <div className="topbarrightIcon">
                        <div className="topbarrightIconTtem">
                            <Person />
                            <span className="iconValue">1</span>
                        </div>
                        <div className="topbarrightIconTtem">
                            <Chat />
                            <span className="iconValue">2</span>
                        </div>
                        <div className="topbarrightIconTtem">
                            <Notifications />
                            <span className="iconValue">1</span>
                        </div>
                    </div>
                    <img src="/assests/person/1.jpeg" alt="Error" className="topbarrightImage" />
                </div>
            </div>
        </>
    )
}

export default Topbar
