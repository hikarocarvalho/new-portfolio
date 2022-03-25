import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuBar from "../components/MenuBar/MenuBar";
import MenuOptionsConfig from "./MenuOptionsConfig";

export default function MenuRoutes(props){
    return (
        <Routes>
            <Route path="/" element={<MenuBar close={props.close} options={MenuOptionsConfig.Home(props.lang.Home.menu.options).menu.options} showChangeLanguage={props.showChangeLanguage} style={props.style} />}></Route>
            <Route path="/projects" element={<MenuBar close={props.close} options={MenuOptionsConfig.Projects(props.lang.Projects.menu.options).menu.options} showChangeLanguage={props.showChangeLanguage} style={props.style} />}></Route>
            <Route path="/project/:id/:stack" element={<MenuBar close={props.close} options={MenuOptionsConfig.Projects(props.lang.Projects.menu.options).menu.options} showChangeLanguage={props.showChangeLanguage} style={props.style} />}></Route>
            <Route path="/technologies" element={<MenuBar close={props.close} options={MenuOptionsConfig.Technologies(props.lang.Technologies.menu.options).menu.options} showChangeLanguage={props.showChangeLanguage} style={props.style} />}></Route>
            <Route path="/learning" element={<MenuBar close={props.close} options={MenuOptionsConfig.Learning(props.lang.Learning.menu.options).menu.options} showChangeLanguage={props.showChangeLanguage} style={props.style} />}></Route>
            <Route path="/learning/play/:id/:technologie" element={<MenuBar close={props.close} options={MenuOptionsConfig.LearningPlay(props.lang.LearningPlay.menu.options).menu.options} showChangeLanguage={props.showChangeLanguage} style={props.style} />}></Route>
            <Route path="*" element={<MenuBar close={props.close} options={MenuOptionsConfig.NotFound(props.lang.NotFound.menu.options).menu.options} showChangeLanguage={props.showChangeLanguage} style={props.style} />}></Route>
        </Routes>
    );
}