import "./Friend.css"


export default function Friend({user}) {
    return (
        <div>
            <li className="sidebarfriendlist">
                <img src={user.profilePicture} alt="Error" className="personimg" />
                <span className="personname">{user.username}</span>
            </li>
        </div>
    )
}
