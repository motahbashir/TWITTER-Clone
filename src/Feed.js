import React from 'react';
import './Feed.css'
import TweetBox from './TweetBox';
import './Post.js'
import Post from './Post.js';
function Feed() {
  return (
    <div className='feed'>
      {/*Header*/}
      <div className='feed__header'>
      <h2>Home</h2>
      </div>
      <TweetBox/>
<Post/>
    </div>
  )
}

export default Feed
