import React,{ useState} from "react";
import ProjectListItem from "../../components/ProjectListItem/ProjectListItem";
import ProjectSelectBar from "../../components/ProjectsSelectBar/ProjectsSelectBar";
import './Projects.css';
import projects from "../../Entitys/projects";

export default function Projects(){
    const [viewProjects,setViewProjects] = useState({
        view:true,
        style:{},
        projectList:projects.fullStack,
        stack:""
    });
    const getProjects = (event)=>{
        if(event.target.value === "back-End"){
            setViewProjects(
                {
                    view:true,
                    style:{top:0,bottom:0},
                    projectList:projects.backEnd,
                    stack:"back-End"
                }
            );
        }else if(event.target.value === "front-End"){
            setViewProjects(
                {
                    view:true,
                    style:{top:0,bottom:0},
                    projectList:projects.frontEnd,
                    stack:"front-End"
                }
            );
        }else{
            setViewProjects(
                {
                    view:true,
                    style:{top:0,bottom:0},
                    projectList:projects.fullStack,
                    stack:"full-Stack"
                }
            );
        }
    }
    const options = [
        {
            name:"Full-Stack",
            value:"full-Stack"
        },
        {
            name:"Front-End",
            value:"front-End"
        },
        {
            name:"Back-End",
            value:"back-End"
        }
    ];
    return (
        <div className="page">
            <div className="container" id="containerProject" style={viewProjects.style}>
                <ProjectSelectBar selectAction={getProjects} options={options}></ProjectSelectBar>
                {viewProjects.view?
                        <ProjectListItem projectList={viewProjects.projectList} stack={viewProjects.stack}></ProjectListItem>
                    :
                        ""
                }
            </div>    
        </div>
    );
}