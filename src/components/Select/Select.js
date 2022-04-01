import React from "react";
import './Select.css';

export default function Select(props){
    return (
        props.onChange?(
            <select className={props.className?"selection"+props.className:"selection"} name={props.options?props.options[0].inputName:undefined} onChange={props.onChange} onLoad={props.onChange} id={props.selectId?props.selectId:null}>
                {props.options?props.options.map((option,index)=>(
                    <option key={index} value={option.value}>{option.name}</option>
                ))
                :
                    ""
                }
            </select>)
        :(
            <select className={props.className?"selection"+props.className:"selection"} name={props.options?props.options[0].inputName:undefined} >
                {props.options?props.options.map((option,index)=>(
                    <option key={index} value={option.value}>{option.name}</option>
                ))
                :
                    ""
                }
            </select>)
    );
}