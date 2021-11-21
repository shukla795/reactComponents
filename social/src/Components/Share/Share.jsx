import "./Share.css"
import {PhotoAlbum , Tag, LocationOn , EmojiEmotions} from "@mui/icons-material"

export default function Share() {
    return (
        <>
            <div className="sharecontainer">
                <div className="sharetop">
                    <img src="/assests/person/1.jpeg" alt="Error" className="sharetopimg" />
                    <input type="text" className="sharetopinput" placeholder="What's in your Mind" />
                </div>
                <hr className="sharehr" />
                <div className="sharebottom">
                  <ul className="sharelist"  >
                      <li className="sharelistitem">
                      <PhotoAlbum htmlColor="red" />
                      <span className="sharelisttext">Photos & Vidoes</span>
                      </li>
                      <li className="sharelistitem">
                      <Tag htmlColor="green" />
                      <span className="sharelisttext">Tag</span>
                      </li>
                      <li className="sharelistitem">
                      <LocationOn htmlColor="yellowgreen" />
                      <span className="sharelisttext">Location</span>
                      </li>
                      <li className="sharelistitem">
                      <EmojiEmotions htmlColor="goldenrod" />
                      <span className="sharelisttext">Feelings</span>
                      </li>
                  </ul>
                  <button type="submit" className="sharebutton" >Share</button>
                </div>
            </div>
        </>
    )
}
