import React from "react";
import github from './../../imgs/github-logo_icon-icons.com_73546.svg';
import linkedin from './../../imgs/icons8-linkedin.svg';
import './Contact.css';

export default function Contact(){
    return (
        <div className="contacts">
            <ul>
                <li>
                    <li>hikarofcarvalho@gmail.com</li>
                <li className="icons">
                    
                    <a href="https://github.com/hikarocarvalho" target="_blank" rel="noreferrer">
                        <img src={github} className="icon" alt="github icon"/>
                    </a>

                    <a href="https://www.linkedin.com/in/hikaro-fernandes-de-carvalho/" target="_blank" rel="noreferrer">
                        <img src={linkedin} className="icon" alt="linkedin icon"/>
                    </a>
                </li>
                    <p>&copy; Todos direitos reservados</p>
                </li>
            </ul>
        </div>
    );
}