import React from "react";
import TopBar from "../TopBAr/TopBar";
import './LanguageMenu.css';

export default function LanguageManu(props){
   
    return (
        <TopBar>
            <nav className="language-menu">
                <ul className="language-options">
                    {props.languages.map((item,index)=>(
                        <li className="language-option" key={index}><button onClick={props.click}>{item.name}</button></li>
                    ))}
                </ul>
            </nav>
        </TopBar>
    );
}