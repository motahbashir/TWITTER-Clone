import React from 'react'
import'./TweetBox.css'
import { Avatar, Button } from '@mui/material';
import pic from './assets/pic.jpg'
import  './TweetBox.css'



function TweetBox() {
  return <div className='tweetbox'>


    <form>
<div className='tweetbox__input'>
    <Avatar src= {pic}></Avatar>
    <input placeholder='whats happening' type='text'></input>
    

</div>
<input className='tweetbox__imageinput' placeholder='input image url' type='text'></input>
<button className='tweetbox__tweetbutton'>Tweet</button>
    </form>

  </div>;
    
      
    
  
}

export default TweetBox
