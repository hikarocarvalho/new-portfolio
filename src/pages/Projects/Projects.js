import React,{ useEffect, useState} from "react";
import ProjectListItem from "../../components/ProjectListItem/ProjectListItem";
import ProjectSelectBar from "../../components/ProjectsSelectBar/ProjectsSelectBar";
import './Projects.css';

export default function Projects(props){
    const [viewProjects,setViewProjects] = useState();
    const getProjects = (event)=>{
        if(event.target.value === "back-End"){
            setViewProjects(
                {
                    ...viewProjects,
                    view:true,
                    style:{top:0,bottom:0},
                    projectList:props.lang.backEnd,
                    stack:"back-End"
                }
            );
        }else if(event.target.value === "front-End"){
            setViewProjects(
                {
                    ...viewProjects,
                    view:true,
                    style:{top:0,bottom:0},
                    projectList:props.lang.frontEnd,
                    stack:"front-End"
                }
            );
        }else if(event.target.value === "game"){
            setViewProjects(
                {
                    ...viewProjects,
                    view:true,
                    style:{top:0,bottom:0},
                    projectList:props.lang.game,
                    stack:"game"
                }
            );
        }else {
            setViewProjects(
                {
                    ...viewProjects,
                    view:true,
                    style:{top:0,bottom:0},
                    projectList:props.lang.fullStack,
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
        },
        {
            name:"Games",
            value:"game"
        }
    ];
    useEffect(()=>{
        setViewProjects({
            ...viewProjects,
            view:true,
            style:{},
            projectList:props.lang.fullStack,
            stack:"full-Stack"
        })
    },[props.lang])
    return (
        <div className="page">
            {viewProjects?
            <div className="container" id="containerProject" style={viewProjects.style}>
                <ProjectSelectBar selectAction={getProjects} options={options}></ProjectSelectBar>
                {viewProjects.view?
                        <ProjectListItem projectList={viewProjects.projectList} stack={viewProjects.stack}></ProjectListItem>
                    :
                        ""
                }
            </div>
            :null}
        </div>
    );
}