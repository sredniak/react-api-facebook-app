import React, {useState} from 'react';
import "./MessageSender.css";
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function MessageSender() {

    const[input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();


        setInput("");
    };


  return (
    <div className='messageSender'>
        <div className='messageSender__top'>
            <Avatar src='https://randomuser.me/api/portraits/lego/3.jpg' />
            <form>
                <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder='Facebook with fake API' 
                className='messageSender__input' />
                {/* <input 
                value={imageUrl} 
                onChange={(e) => setImageUrl(e.target.value)} placeholder='image url' 
                /> */}

                <button onClick={handleSubmit} type="submit">Hidden</button>
            </form>
        </div>
        <div className='messageSender__bottom'>
            <div className='messageSender__option'>
                <VideocamIcon style={{color: "red"}} />
                <h3>Live</h3>
            </div>
            <div className='messageSender__option'>
                <PhotoLibraryIcon style={{color: "lightblue"}} />
                <h3>Photo</h3>
            </div>
            <div className='messageSender__option'>
                <InsertEmoticonIcon style={{color: "green"}} />
                <h3>Mood</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender;