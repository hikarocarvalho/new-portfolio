import React from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import './Form.css';

export default function Form(props){
    return (
        <form className={props.className?"form "+props.className:"form"}>
            {
                props.title?
                    props.title
                :
                    ""
            }
            {props.inputs?props.inputs.map((input,index)=>(
                Array.isArray(input)?
                    <Select options={input} key={index} />
                
                :
                    input.type==="option"?
                        ""
                    :
                        <Input type={input.type} name={input.name} key={index} />
            ))
            :
                ""
            }
            {
                props.inputs[0].type?
                    props.inputs[0].type==="option"?
                        props.onChange?
                            <Select options={props.inputs} onChange={props.onChange} selectId={props.selectId?props.selectId:null}/>
                        :
                            <Select options={props.inputs} />
                    :
                        ""
                :
                    ""
            }
        </form>
    );
}