import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "../pages/Projects/Projects";
import ProjectView from "../pages/ProjectView/ProjectView";
import Home from "../pages/Home/Home";
import Learning from "../pages/Learning/Learning";
import LearningPlay from "../pages/LearningPlay/LearningPlay";
import Technologies from "../pages/Technologies/Technologies";
import NotFound from "../pages/NotFound/NotFound";

export default function PageRoutes(props){
    return (
        <Routes>
            <Route path="/" element={<Home lang={props.lang.Home.page}/>}></Route>
            <Route path="/projects" element={<Projects lang={props.lang.Projects.page} />}></Route>
            <Route path="/project/:id/:stack" element={<ProjectView lang={props.lang.ProjectView.page} />}></Route>
            <Route path="/technologies" element={ <Technologies lang={props.lang.Technologies.page} />}></Route>
            <Route path="/learning" element={<Learning lang={props.lang.Learning.page} />}></Route>
            <Route path="/learning/play/:id/:technologie" element={<LearningPlay lang={props.lang.LearningPlay.page} />}></Route>
            <Route path="*" element={<NotFound lang={props.lang.NotFound.page} />}></Route>
        </Routes>
    );
}