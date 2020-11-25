import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';

import VideoSidebar from './VideoSidebar';


const Video = ({
    url,
    channel,
    description,
    song1,
    likes,
    messages,
    shares
}) => {
    const [playing, setPlaying] = useState(false);

    const videoRef= useRef(null);

    const onVideoPress= () =>{
        if (playing){

            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
    }

    return (
        <div className = "video">
            <video 
            className = "video__player" 
            loop
            onClick = {onVideoPress}
            ref = {videoRef}
            src= {url} 
            >

            </video>
            <VideoFooter 
                channel = {channel} 
                description = {description}
                song1 = {song1}

            />

            <VideoSidebar 
                likes= {likes} 
                messages = {messages} 
                shares= {shares} 

            />

            {/* <videosidebar> */}
            {/* v<ideosidebar >*/}
        </div>
    )
}

export default Video;
