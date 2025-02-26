import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import {ChatBubbleOutline, FavoriteBorder, FavoriteBorderSharp, Publish, Repeat, VerifiedUser} from '@mui/icons-material'
import pic from './assets/pic.jpg';
import job from './assets/job.jpg'
function Post ({ dislayName,
  username,
  verified,
  text,
  image,
  avatar}) {
  return (
    <div className='post'>
    <div className='post__avatar'>
      <Avatar src={pic}></Avatar>
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
<h3> mota Bash {''}
  <span  className= "post__headerspecial" >
  <VerifiedUser className="post__badage"/>  @ motabszm
</span></h3>
          </div>
<div className='post__headerDescrition'> 
  <p>hey there</p>
</div>
        </div>
      
      <img src={job} ></img>

      <div className='post__footer'>

<ChatBubbleOutline fontSize='small'/>
<Repeat fontSize='small'/>
<FavoriteBorder fontSize='small'/>
<Publish fontSize='small'/>

</div>
      </div>
    </div>
  )

}
export default Post

