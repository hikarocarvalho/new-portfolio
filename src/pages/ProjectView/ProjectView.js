import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../../Entitys/projects";
import './ProjectView.css';
export default function ProjectView(){
    const {id,stack} = useParams();
    const [project,setProject] = useState();
    const getProject = ()=>{
        const selectedProject = stack==="back-End"?projects.backEnd:stack==="front-End"?projects.frontEnd:projects.fullStack;
        let defaultProject;
        if(!project){
            defaultProject = (stack==="back-End"?projects.backEnd
            :stack==="front-End"?projects.frontEnd
            :projects.fullStack)
        }
        for(let count=0;count<defaultProject.length;count++){
            if(defaultProject[count].id === parseInt(id)){
                setProject(defaultProject[count]);
            }
        }
    };
    useEffect(()=>{
        getProject();
    },[])
    return (
        <div className="page page-view">
            {project?
                <div className="view" key={project.id}>
                    <img className="screen-image" src={project.image}>
                    </img>
                    <div className="description-view">
                        <p className="title-view">
                            {project.name}
                        </p>
                        <p className="text-view">
                            {project.description}
                        </p>
                        <table className="depends-view">
                            <thead>
                                <th>name</th>
                                <th>description use</th>
                            </thead>
                            {project.dependency.map((item,index)=>(
                            <tbody key={index}>
                                <td>{item.name}</td>
                                <td>{item.use}</td>
                            </tbody>
                            ))}
                            <tfoot>
                                <td></td>
                                <td></td>
                            </tfoot>
                        </table>
                    </div>
                </div>
            :
                ""
            }
        </div>
    );
}