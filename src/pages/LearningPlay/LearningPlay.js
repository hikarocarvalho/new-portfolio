import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayList from "../../components/PlayList/PlayLis";
import VideoPlay from "../../components/VidelPlay/VideoPlay";
import './LearningPlay.css';

export default function LearningPlay(props){
    const { id, technologie } = useParams();
    const [video,setVideo] = useState();
    const [playListView, setPlayListView] = useState({folder:"",list:[]});

    const searchTopic = (listTopic)=>{
        if(listTopic.topics.length>0){
            for(let count=0; count<listTopic.topics.length; count++){
                if(listTopic.topics[count].id===parseInt(id)){
                    setPlayListView({
                            folder:listTopic.topics[count].folder,
                            list:listTopic.topics[count].playList
                        });
                    
                }
            }
        }
    }

    const changePlayList = ()=>{
        for(let i=0;i<props.lang.length;i++){
            if(props.lang[i].name === technologie){
                searchTopic(props.lang[i]);
            }
        }
    }
    
    useEffect(()=>{
        changePlayList();
    },[]);
    const changeVideo = (value)=>{
        setVideo(value);
    }
    return (
        <div className="learning-play">
            <VideoPlay videoLink={video} />
            <PlayList changeVideo={changeVideo} playListView={playListView.list} folder={playListView.folder}/>
        </div>
    );
}