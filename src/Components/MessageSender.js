import { Avatar } from '@material-ui/core'
import React, { useState} from 'react'
import '../Styles/MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { useStateValue } from '../Context/StateProvider';
import db from '../Firebase/firebase'
import firebase from 'firebase'

function MessageSender() {

    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("");
    // eslint-disable-next-line
    const [{user}, dispatch] = useStateValue();

    const handleSubmit = (event) => {
        event.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });

        setInput("");
        setImageUrl("");
    }
    return (
        <div className = 'messageSender'>
            <div className='messageSender__top'>
                <Avatar 
                src={user.photoURL}
                ></Avatar>
                <form>
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                     className='messageSender__input' placeholder={`What's on your mind, ${user.displayName}?`}></input>
                    <input 
                    value={imageUrl}
                    onChange={(e)=>setImageUrl(e.target.value)}
                    placeholder="Image URL(optional)"></input>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{color: 'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{color: 'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender__option'>
                    <EmojiEmotionsIcon style={{color: 'Orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
