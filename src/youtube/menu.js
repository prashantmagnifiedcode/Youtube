import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import GetAppIcon from '@material-ui/icons/GetApp';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
const Menu=()=>{
    return(
        <>
        <div className="menu_container">
            <div className="rows">
                <HomeIcon/>
                <h4>Home</h4>
            </div>
            <div className="rows">
                <VideoLibraryIcon/>
                <h4>Library</h4>
            </div>
            <div className="rows">
                <VideoLibraryIcon/>
                <h4>Your channel</h4>
            </div>
            <div className="rows">
                <VideoLibraryIcon/>
                <h4>Profile</h4>
            </div>
            <div className="rows">
                < NotificationsIcon/>
                <h4>Notification</h4>
            </div>
            <div className="rows">
                < NotificationsIcon/>
                <h4>Shorts</h4>
            </div>
            <div className="rows">
                <HistoryIcon/>
                <h4>History</h4>
            </div>
            <div className="rows">
                <GetAppIcon/>
                <h4>Download</h4>
            </div>
            <div className="rows">
                <SubscriptionsIcon/>
                <h4>Subscribe</h4>
            </div>
            <div className="rows">
                <ThumbUpAltIcon/>
                <h4>Like</h4>
            </div>
            <div className="rows">
                <WatchLaterIcon/>
                <h4>Watch Later</h4>
            </div>
            

           
            <div className="rows">
                <WatchLaterIcon/>
                <h4>Watch Later</h4>
            </div>
            <div className="rows">
                <SettingsIcon/>
                <h4>Setting</h4>
            </div>
        </div>
        </>
    )
}
export default Menu