import React from 'react';
import { NavLink,useNavigate  } from "react-router-dom";
import photoPerfil from './../../imgs/photo.png';
import './MenuBar.css';

export default function MenuBar(props){
    const history = useNavigate();
    const turnBack = ()=>{
        history(-1);
    }
    return (
        <div className="menu-bar" style={props.style}>
            <div className="menu" >
                <img className="photo" src={photoPerfil} alt="Personal Photographic" />
                <section className="my-description">
                    Hikaro Fernandes de Carvalho
                </section>
                <nav className="menu-options">
                    {props.options.map((option,index)=>(
                        option.route!==""?
                            option.route==="changeLanguage"?
                                <div className="change-language-menu" onClick={props.showChangeLanguage} key={index}>{option.text}</div>
                            :
                            <NavLink className={option.icon} to={option.route} key={index}>{option.text}</NavLink>
                        :
                            <div className="turn-back" key={index} onClick={turnBack}>{option.text}</div>
                        
                    ))}
                </nav>
            </div>
        </div>
    );
}