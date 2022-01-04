import React from "react";
import TopBar from "../TopBAr/TopBar";
import Select from './../Select/Select';
import './ProjectsSelectBar.css';
export default function ProjectSelectBar(props){
    return (
        <TopBar>
            Select one Stack: 
            <Select onChange={props.selectAction} options={props.options}>

            </Select>
        </TopBar>
    );
}