import React from 'react';


import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

import './Sidebar.css';



function Sidebar() {
  return (
    <div className='sidebar'>

        <TwitterIcon className='sidebar__twittericon'/>
        
<SidebarOption active Icon ={HomeIcon} text="Home"/>
<SidebarOption  Icon={SearchIcon} text="explore"/>
<SidebarOption  Icon={NotificationsNoneIcon} text="notifications"/>
<SidebarOption Icon={MailOutlineIcon} text="massages"/>
<SidebarOption Icon={BookmarkBorderIcon} text="BookMarks"/>
<SidebarOption Icon={ListAltIcon} text="Lists"/>
<SidebarOption Icon={PermIdentityIcon} text="profile" />
<SidebarOption Icon={MoreHorizIcon} text="more"/>


      <Button  className="sidebar__tweet" fullWidth   variant='outlined' >Tweet</Button>

      
    </div>
  )
}

export default Sidebar
