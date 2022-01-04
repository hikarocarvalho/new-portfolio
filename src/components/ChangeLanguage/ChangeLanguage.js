import React from "react";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import language from "../../Entitys/language";
import './ChangeLanguage.css';

export default function ChangeLanguage(props){
    const getLanguage = (event)=>{
        const select = event.target.options[event.target.selectedIndex].value;
        props.setLanguage(select);
    }
    return (
        <Modal closeModal={props.closeModal}>
            <Form inputs={language} title="Change Language" onChange={getLanguage}/>
        </Modal>
    );
}