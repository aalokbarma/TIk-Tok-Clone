import React from 'react';
import './videoFooter.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import MusicNoteTwoToneIcon from '@material-ui/icons/MusicNoteTwoTone';
import Ticker from 'react-ticker';
// import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function VideoFooter({channel, description, song1}) {
    return (
        <div className = "videoFooter">
            <div className = "videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className = "videoFooter__ticker">
                    <MusicNoteTwoToneIcon className = "videoFooter__icon" />
                    <Ticker mode = "smooth">
                        {
                            ({index}) => (
                                <>
                                    <p className = 'song'>{song1}</p>
                                </>
                            )
                        }
                    </Ticker>

                </div>
            </div>
            <img className = "videoFooter__record" src= "https://static.thenounproject.com/png/934821-200.png" alt = "spinner" />
            <AccountCircleIcon className = "userIcon" />
        </div>
    )
}

export default VideoFooter;
