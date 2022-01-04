import React from "react";
import { NavLink } from "react-router-dom";
import './ProjectListItem.css';
import github from './../../imgs/github-logo_icon-icons.com_73546.svg';
import video from './../../imgs/film_projector_cinema_icon-icons.com_66132.svg';
export default function ProjectListItem(props){
    return (
        <div className="list-box">
            {props.projectList.map((item,index)=>(
                <NavLink to={"/project/"+item.id+"/"+props.stack} key={index} className="project-item">
                   
                        <figure className="project-figure">
                            <img src={item.image} alt="teste" className="screen-view"></img>
                        </figure>
                        <article className="project-description">
                            <p className="project-title">
                                    {item.name}
                            </p>
                            <p className="project-text">
                                    {item.description}
                            </p>
                        </article>
                        <footer className="links">
                            <i><a href={item.github}><img className="icons" src={github} alt="icon" /></a></i>
                            <i><a href={item.video}><img className="icons" src={video} alt="icon" /></a></i>
                        </footer>
                 
                </NavLink>
            ))}
        </div>
    );
}