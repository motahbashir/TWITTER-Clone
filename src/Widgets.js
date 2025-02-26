import React from 'react';
import "./Widgets.css";
import { Search } from '@mui/icons-material';
import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterShareButton } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <Search className='widgets__searchicon'/>
        <input placeholder='Search in Twitter' type='text'/>
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's Happening</h2>

        
        <TwitterTweetEmbed tweetId={"1852695251128852493"} />

       
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='motabszd' // Make sure this is your correct Twitter handle
          options={{ height: 400 }}
        />


        <TwitterShareButton
        
        url='https://www.facebook.com/motahareh.bashirzadeh.1'
        options={ {text:"react is awsome"}}
        
        />
      </div>

      
    </div>
  );
}

export default Widgets;
