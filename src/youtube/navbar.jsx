import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import VideocamIcon from '@material-ui/icons/Videocam';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
const Navbar=()=>{
    return(
        <>
           <div className="outer_container_of_navbar">
             <div className="container1">
                 <MenuIcon style={{fontSize:"30px"}}/>
           <YouTubeIcon  style={{color:"red" ,fontSize:"60px"}} />
            <h2>YouTube</h2>
             </div>
             <div className="search">
             <input type="text" name="" id="" placeholder="Search" />
             <SearchIcon  className="search-icon"style={{fontSize:"40px" ,margin:"2px",color:"black"}} />
             </div>
             <div className="container2">
                  <VideocamIcon style={{fontSize:"40px" ,color:"black",margin:"2px"}}/>
                  <NotificationsIcon style={{fontSize:"40px",color:"black",margin:"2px"}}/>
                  <AccountCircleIcon style={{fontSize:"40px",color:"black",margin:"2px"}}/>
             </div>
           </div>
        </>
    )
}
export default Navbar;