import React from "react";
import './PlayListItem.css';
export default function PlayListItem(props){
    const returnVideo = ()=>{
        props.changeVideo(props.item.link);
    }
    return (        
            <div className="play-list-item" key={props.item.id} onClick={returnVideo}>
                <img src={props.folder} className="play-list-folder" />
                <p>{props.item.name}</p>
            </div>
    );
}