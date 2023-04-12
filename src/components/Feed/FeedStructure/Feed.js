import React from 'react';
import "../FeedStructure/Feed.css";
import StoryReel from '../Story/StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from '../Posts/PostList/PostList';

function FeedStructure() {


  return (
    <div className='feed'>

        <StoryReel/>
        <MessageSender />
        <PostList />
        
    </div>
  );
}

export default FeedStructure;