import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Topics.css';

export default function Topics(props){
    const [topics,setTopics] = useState(props.topics);
    useEffect(()=>{
        setTopics(props.topics);
    },[]);
    return (
        <section className="topics-box">
            {topics?
                (topics.map((item,index)=>(
                    <NavLink to={"/learning/play/"+item.id+"/"+props.technologie} className="topics-item" key={index}>
                        <img className="topic-folder" src={item.folder} alt="topic" />
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                    </NavLink>
                )))
                :
                ""
            }
        </section>
    );
}