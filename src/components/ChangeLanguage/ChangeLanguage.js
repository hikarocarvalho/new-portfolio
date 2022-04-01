import React, { useState,useEffect } from "react";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import language from "../../Entitys/language";
import "./ChangeLanguage.css";

export default function ChangeLanguage(props) {
    const [selectedLang,setSelectedLang] = useState();
  let verifyLanguage = () => {
    let lang = "";
    if (document.cookie) {
      if (decodeURIComponent(document.cookie).includes(";")) {
        const defaultCookie = decodeURIComponent(document.cookie).split(";");
        for (let count = 0; count < defaultCookie.length; count++) {
          if (defaultCookie[count].includes("lang")) {
            lang = defaultCookie[count].split("=")[1];
          }
        }
      } else {
        if (document.cookie.includes("lang")) {
          lang = document.cookie.split("=")[1];
        }
        return lang;
      }
      return lang;
    } else {
      return "";
    }
  };
  const getLanguage = (event) => {
    event.preventDefault();
    const select = event.target.options[event.target.selectedIndex].value;
    document.cookie = "lang="+select+"";
    setSelectedLang(select);
    
  };
  useEffect(()=>{
    const verifyLang = verifyLanguage();
    if(verifyLang===""){
        console.log(verifyLang);
        if(!!selectedLang){
            props.setLanguage(selectedLang)
        }
    }else{
        document.getElementById("set_lang").value=verifyLang;
        props.setLanguage(verifyLang);
    }
  },[selectedLang]);
  return (
    <Modal closeModal={props.closeModal}>
      <Form inputs={language} title="Change Language" onChange={getLanguage} selectId={"set_lang"} />
    </Modal>
  );
}
