import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoPlay from "../../components/VidelPlay/VideoPlay";
import './ProjectView.css';
export default function ProjectView(props){
    const {id,stack} = useParams();
    const [project,setProject] = useState();
    useEffect(()=>{
        let defaultProject;
        if(!project){
            defaultProject = (stack==="back-End"?props.lang.backEnd
            :stack==="front-End"?props.lang.frontEnd
            :props.lang.fullStack)
        }
        for(let count=0;count<defaultProject.length;count++){
            if(defaultProject[count].id === parseInt(id)){
                setProject({...project,...defaultProject[count]});
            }
        }
    },[props.lang])
    return (
        <div className="page page-view">
            {project?
                <div className="view" key={project.id}>
                    <VideoPlay videoLink={project.video}></VideoPlay>
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