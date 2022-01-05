import React from "react";
import example from "./../../imgs/fullStack/projectManager.png";
import './Topics.css';

export default function Topics(){
    return (
        <section className="topics-box">
            <articles className="topics-item">
                <img className="topic-folder" src={example} alt="topic" />
                <p>decription</p>
            </articles>

            <articles className="topics-item">
                <img className="topic-folder" src={example} alt="topic" />
                <p>decription</p>
            </articles>
            <articles className="topics-item">
                <img className="topic-folder" src={example} alt="topic" />
                <p>decription</p>
            </articles>
            <articles className="topics-item">
                <img className="topic-folder" src={example} alt="topic" />
                <p>decription</p>
            </articles>
            <articles className="topics-item">
                <img className="topic-folder" src={example} alt="topic" />
                <p>decription</p>
            </articles>
            <articles className="topics-item">
                <img className="topic-folder" src={example} alt="topic" />
                <p>decription</p>
            </articles>
            <articles className="topics-item">
                <img className="topic-folder" src={example} alt="topic" />
                <p>decription</p>
            </articles>
            <articles className="topics-item">
                <img className="topic-folder" src={example} alt="topic" />
                <p>decription</p>
            </articles>
            <articles className="topics-item">
                <img className="topic-folder" src={example} alt="topic" />
                <p>decription</p>
            </articles>
        </section>
    );
}