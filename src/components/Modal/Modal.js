import React from "react";
import './Modal.css';

export default function Modal(props){
    return (
        <div className="modal">
            <label className="close-modal" onClick={props.closeModal}>X</label>
            {props.children}
        </div>
    );
}