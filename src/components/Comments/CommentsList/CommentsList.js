import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import "./CommentsList.css";
import Comment from '../Comment/Comment';

function CommentsList() {

  const [comments, setComments] = useState([]);
  

useEffect(() => {
  axios.get("https://random-data-api.com/api/v2/users?size=30")
  .then((result) => {setComments(result.data)});
}, []);

  return (
    <div className='comment__list'>
        
        {comments.map((comment) =>(
         <Comment message={comment.employment.key_skill} profilePic={comment.avatar}  first_name={comment.first_name} last_name={comment.last_name} key={comment.uid}/>  
        ))}
        
    </div>
  );
}

export default CommentsList;