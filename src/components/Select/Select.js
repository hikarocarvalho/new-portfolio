import React from "react";
import './Select.css';

export default function Select(props){
    return (
        props.onChange?(
            <select className={props.className?"selection"+props.className:"selection"} name={props.options?props.options[0].inputName:undefined} onChange={props.onChange}>
                 <option key={"00"} value=""></option>
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