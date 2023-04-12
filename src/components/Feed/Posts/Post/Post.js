import { Avatar } from '@mui/material';
import React from 'react';
import "../Post/Post.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import Modal from '../../../Modal/Modal';



function Post({profilePic, image, first_name, last_name, timestamp, message, state, length}) {

    const [isModalOpen, setModalState] = React.useState(false);

  return (
    <div className='post'>
        
        <div className='post__top'>
            <Avatar src={profilePic} className="post__avatar" />
            <div className='post__topInfo'>
                <h3>{first_name} {last_name}</h3>
                <p>{timestamp}</p>
            </div>
        </div>
        <div className='post__bottom'>
            <p>Employment title: {message}</p>
            <p>State: {state}</p>
        </div>

        <div className='post__image'>
            <img src={image} alt="" />
        </div>

        <div className='right'>
           
            <Modal isOpen={isModalOpen} handleClose={() => setModalState(false)}/>
            <p onClick={() => setModalState(true)}>{length} Comments</p>
                
        </div>

        <div className='post__options'>
            <div className='post__option'>
                <ThumbUpIcon />
                <p>Like</p>
            </div>
           
            <Modal isOpen={isModalOpen} handleClose={() => setModalState(false)}/>
            <div className='post__option' onClick={() => setModalState(true)}>
                <ChatBubbleOutlineIcon style={{color: "lightblue"}}/>
                <p>Comment</p>
            </div>
            
            <div className='post__option'>
                <ShareIcon />
                <p>Share</p>
            </div>

        </div>
        
    </div>
  );
}

export default Post;