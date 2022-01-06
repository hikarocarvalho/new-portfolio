import React, { useEffect, useState } from "react";
import "./VideoPlay.css";

export default function VideoPlay(props){
    const [videoLink,setVideoLink] = useState("")
    useEffect(()=>{
        setVideoLink(props.videoLink);
    },[props.videoLink])
    return (
        <iframe 
            className="video-player" 
            src={videoLink} 
            title="YouTube video player" 
            frameborder="0" 
            allow="
                accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture" 
            allowfullscreen
        >

        </iframe>
        
    );
}