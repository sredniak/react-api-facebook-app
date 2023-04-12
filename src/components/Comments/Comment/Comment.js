import { Avatar } from '@mui/material';
import React from 'react';
import "./Comment.css";



function Comment({profilePic, first_name, last_name, message}) {


  return (
    <div className='comment'>
         <Avatar src={profilePic} className="comment-avatar" />
            <div className='comment-field'>
            <div className='comment-info'>
                <h3>{first_name} {last_name}</h3>
                <p>{message}</p>
            </div>
        </div>
        
    </div>
  );
}

export default Comment;