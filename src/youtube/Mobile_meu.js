import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import GetAppIcon from '@material-ui/icons/GetApp';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SettingsIcon from '@material-ui/icons/Settings';
const Mobile_Menu=()=>{
    return(
        <>
        <div className="Mobile_menu_contianer1">
            <div className="mobile_menu_container2">

           <div className="icon_row">
           <HomeIcon style={{color:"red" ,fontSize:"30px"}}/>
               </div>  
           <div className="icon_row">
           <VideoLibraryIcon style={{color:"red" ,fontSize:"30px"}}/>
               </div>  
           <div className="icon_row">
           <HistoryIcon style={{color:"red" ,fontSize:"30px"}}/>
               </div>  
           <div className="icon_row">
           
           <SettingsIcon style={{color:"red" ,fontSize:"30px"}}/>
               </div>  
        
        </div>
            </div>
        
        </>
    )
}
export default Mobile_Menu