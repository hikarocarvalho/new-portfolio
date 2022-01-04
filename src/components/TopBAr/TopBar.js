import React from "react";
import './TopBar.css';

export default function TopBar(props){
    return (
        <div className="top-bar">
            {props.children}
        </div>
    );
}