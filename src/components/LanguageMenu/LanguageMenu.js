import React from "react";
import './LanguageMenu.css';

export default function LanguageMenu(props){
   
    return (
        <nav className="language_bar">
            <nav className="language-menu">
                <ul className="language-options">
                    {props.languages.map((item,index)=>(
                        <button key={index} className="language-option" onClick={props.click}>{item.name}</button>
                    ))}
                </ul>
            </nav>
        </nav>
    );
}