import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ProjectListItem.css";
import github from "./../../imgs/github-logo_icon-icons.com_73546.svg";
import video from "./../../imgs/film_projector_cinema_icon-icons.com_66132.svg";
export default function ProjectListItem(props) {
  const [itemList, setItem] = useState();
  useEffect(() => {
    setItem({
      ...itemList,
      items: props.projectList,
      stack: props.stack,
    });
  }, [props.projectList,props.stack,itemList,setItem]);
  return (
    <div className="list-box">
      {itemList
        ? itemList.items.map((item, index) => (
            <div className="project-item" key={index}>
              <NavLink to={"/project/" + item.id + "/" + props.stack}>
                <figure className="project-figure">
                  <img
                    src={item.image}
                    alt="teste"
                    className="screen-view"
                  ></img>
                </figure>
                <article className="project-description">
                  <p className="project-title">{item.name}</p>
                  <p className="project-text">{item.description}</p>
                </article>
              </NavLink>
              <footer className="links">
                <i>
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <img className="icons" src={github} alt="icon" />
                  </a>
                </i>
                <i>
                  <a href={item.video} target="_blank" rel="noreferrer">
                    <img className="icons" src={video} alt="icon" />
                  </a>
                </i>
              </footer>
            </div>
          ))
        : null}
    </div>
  );
}
