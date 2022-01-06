import React, { useEffect, useState } from "react";
import PlayListItem from "../PlayListItem/PlayListItem";
import "./PlayList.css";

export default function PlayList(props){
    const [playListItems,setPlayListItems] = useState(props.playListView);
    useEffect(()=>{
        setPlayListItems(props.playListView);
    },[JSON.stringify(props.playListView)]);
    return (
        <div className="playlist">
            {playListItems?
            
                (playListItems.map((item,index)=>(
                    <PlayListItem item={item} folder={props.folder} key={index} changeVideo={props.changeVideo} />
                )))
                :
                ""
            }
            
        </div>
    );
}