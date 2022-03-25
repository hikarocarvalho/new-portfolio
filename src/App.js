import React,{ useEffect, useState } from 'react';
import './App.css';
import Language from './Language/Language';
import MenuRoutes from './Routes/MenuRoutes';
import PageRoutes from './Routes/PageRoutes';
import ChangeLanguage from "./components/ChangeLanguage/ChangeLanguage";
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  const [lang,setLang] = useState("en");
  const [language,setLanguage] = useState(Language(lang));
  const [theme,setTheme] = useState("light");
  const [show,setShow] = useState(false)
  const showModal = ()=>{
    if(show === false){
      setShow(true);
    }else{
      setShow(false);
    }
  }
  const setDark = (event)=>{
    event.preventDefault();
    if(theme==="dark"){
      setTheme("light");
      document.cookie = "theme=light;";
      
    }else{
      setTheme("dark");
      document.cookie = "theme=dark;";
    }
  }
  let verifyTheme = ()=>{
    if(document.cookie){
      let theme = '';
      if(decodeURIComponent(document.cookie).includes(";")){
        const defaultCookie = decodeURIComponent(document.cookie).split(';');
        for(let count=0; count < defaultCookie.length ; count++){
          if(defaultCookie[count].includes("theme")){
            theme = defaultCookie[count].split("=")[1];
          }
        };
      }else{
        if(document.cookie.includes("theme")){
          return document.cookie.split("=")[1];
        }
      }
      return theme;
    }else{
      return "";
    }
  }
  function detectMob() {
    if(window.innerWidth < 1000){
      return true;
    }
    return false;
}

    useEffect(()=>{
    const cookie = verifyTheme;
    if(cookie === ""){
      document.cookie = "theme=light;";
    }else{
     setTheme(cookie); 
    }
    const colorTheme = document.querySelector(':root');
    const style = {
      backgroundColor : '',
      disable : '',
      colorFirst : '',
      colorSecond : '',
      fontColor : ''
    }
    if(theme === "dark"){
      style.backgroundColor = getComputedStyle(colorTheme).getPropertyValue("--darkBk");
      style.disable = getComputedStyle(colorTheme).getPropertyValue("--darkDisable");
      style.colorFirst = getComputedStyle(colorTheme).getPropertyValue("--darkColorFirst");
      style.colorSecond = getComputedStyle(colorTheme).getPropertyValue("--darkColorSecond");
      style.fontColor = getComputedStyle(colorTheme).getPropertyValue("--darkFontColor");
    }else{
      style.backgroundColor = getComputedStyle(colorTheme).getPropertyValue("--lightBk");
      style.disable = getComputedStyle(colorTheme).getPropertyValue("--lightDisable");
      style.colorFirst = getComputedStyle(colorTheme).getPropertyValue("--lightColorFirst");
      style.colorSecond = getComputedStyle(colorTheme).getPropertyValue("--lightColorSecond");
      style.fontColor = getComputedStyle(colorTheme).getPropertyValue("--lightFontColor");
    }
    colorTheme.style.setProperty('--backgroundColor',style.backgroundColor);
    colorTheme.style.setProperty('--disable',style.disable);
    colorTheme.style.setProperty('--colorFirst',style.colorFirst);
    colorTheme.style.setProperty('--colorSecond',style.colorSecond);
    colorTheme.style.setProperty('--fontColor',style.fontColor);
  },[theme]);
  useEffect(()=>{
    setLanguage(Language(lang));
  },[lang]);
  const [hide,setHide] = useState({});
  const mobileSetHide = ()=>{
    if(detectMob()){
    if(JSON.stringify(hide)===JSON.stringify({})){
      setHide({
        width:0,
        fontSize:0,
        boxShadow:"none",
      });
    }else{
      setHide({});
    }
  }}
  return (
    <div className="App">
      <i className="bi bi-list menu-icon" onClick={mobileSetHide}></i>
      <button onClick={setDark} className='dark-theme'></button>
      <Router>
        <MenuRoutes close={mobileSetHide} lang={language} showChangeLanguage={showModal} style={hide}/>
        <PageRoutes lang={language} />
        {show?
        <ChangeLanguage setLanguage={setLang} closeModal={showModal} />
        :""}
      </Router>
    </div>
  );
}

export default App;
