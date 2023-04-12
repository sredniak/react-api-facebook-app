import React from 'react';
import "./PostList.css";
import Post from '../Post/Post';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import axios from "axios";



function PostList() {

  const [posts, setPosts] = useState([]);
  const lengthOfPosts = posts.length;
  const numberOfPosts = '30';

useEffect(() => {
  axios.get(`https://random-data-api.com/api/v2/users?size=${numberOfPosts}`)
  .then((result) => {setPosts(result.data)});
}, []);


  return (
    <div className='post__list'>
        
        {posts.map((post) =>(
         <Post message={post.employment.title} state={post.address.state}  image={post.avatar}  profilePic={post.avatar} timestamp={post.date_of_birth} first_name={post.first_name} last_name={post.last_name} length={lengthOfPosts} key={post.id}/>   
        ))}
        
    </div>
  );
}

export default PostList;