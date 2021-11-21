import "./Online.css"

export default function Online({user}) {
    return (
        <div>
            <li className="rightbaronlinefriendlist">
                <img src={user.profilePicture} alt="" className="onlinefriendlistimg" />
                <span className="onlinemode"></span>
                <div className="onlinepersonname">{user.username}</div>
            </li>
        </div>
    )
}
