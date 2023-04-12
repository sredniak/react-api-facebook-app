import React from 'react';
import "./StoryReel.css";
import Story from '../Story';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';

function StoryReel() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list")
    .then((result) => {setUsers(result.data)});
  }, []);

  
  return (
    <div>

      <div className='flex'>
        <h4 className='reel__option reel__option--active'><PhotoAlbumIcon /></h4>
      </div>

      <div className='storyReel' >
        {users.map((user) =>(
         <Story profileSrc={user.download_url}  image={user.download_url} title={user.author} key={user.id} />
        ))}
      </div>
      
    </div>
  )
}

export default StoryReel;