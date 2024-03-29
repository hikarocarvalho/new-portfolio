import React from "react";
import './Input.css';

export default function Input(props){
    return (
        <input 
            type={
                props.type
            }
            className={
                props.className?
                    "input "+props.className
                :
                    "input"
            } 
            name={
                props.name
            } 
        />
    );
}