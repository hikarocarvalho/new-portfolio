import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuBar from "../components/MenuBar/MenuBar";
import MenuOptionsConfig from "./MenuOptionsConfig";

export default function MenuRoutes(props){
    return (
        <Routes>
            <Route path="/" element={<MenuBar options={MenuOptionsConfig.Home(props.lang.Home.menu.options).menu.options} showChangeLanguage={props.showChangeLanguage} style={props.style} />}></Route>
            <Route path="/projects" element={<MenuBar options={MenuOptionsConfig.Projects(props.lang.Projects.menu.options).menu.options} showChangeLanguage={props.showChangeLanguage} style={props.style} />}></Route>
            <Route path="/technologies" element={<MenuBar options={MenuOptionsConfig.Technologies(props.lang.Technologies.menu.options).menu.options} showChangeLanguage={props.showChangeLanguage} style={props.style} />}></Route>
            <Route path="/learning" element={<MenuBar options={MenuOptionsConfig.Learning(props.lang.Learning.menu.options).menu.options} showChangeLanguage={props.showChangeLanguage} style={props.style} />}></Route>
            <Route path="*" element={<MenuBar options={MenuOptionsConfig.NotFound(props.lang.NotFound.menu.options).menu.options} showChangeLanguage={props.showChangeLanguage} style={props.style} />}></Route>
        </Routes>
    );
}