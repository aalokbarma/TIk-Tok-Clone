import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';

const VideoSideBar = ({likes, shares, messages}) => {

    const [liked, setLiked] = useState(false);


    const comment =() => {
        return(
            <>
            <input type = "text" />
            </>
        )
    }


    return (
        <div className = "videoSidebar">
            <div className = "videoSidebar__button">
                {liked ? (
                    <FavoriteIcon className = "favoriteIcon" fontSize = "large" onClick = {(e) => setLiked(false)} />
                    

                ) : <FavoriteBorderIcon fontSize = "large" onClick = {(e) => setLiked(true)} /> }
                <p>{liked ? likes +1 : likes}</p>
            </div>
            <div onClick = {comment} className = "videoSidebar__button">
                <ChatIcon  fontSize = "large" />
                <p>{messages}</p>
            </div>
            <div className = "videoSidebar__button">
                <ShareIcon fontSize = "large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSideBar
