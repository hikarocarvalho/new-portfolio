import React,{ useState, useEffect } from "react";
import LanguageMenu from "../../components/LanguageMenu/LanguageMenu";
import Topics from "../../components/Topics/Topics";
import programingLanguages from "../../Entitys/programingLangages";
import './Learning.css';

export default function Learning(){
    const [language,setLanguage] = useState(programingLanguages[0]);
    const setDefaultLanguage = (defaultLanguage)=>{
        for(let count=0;count<programingLanguages.length;count++){
            if(programingLanguages[count].name === defaultLanguage){
                setLanguage(programingLanguages[count]);
            }
        }
    }
    const getSelected = (event)=>{
        event.preventDefault();
        const defaultLanguage = event.target.innerHTML;
        setDefaultLanguage(defaultLanguage);
    }
    useEffect(()=>{
    },[]);
    return (
        <div className="page">
            <LanguageMenu click={getSelected} languages={programingLanguages}/>
            {language?
                    <Topics topics={language.topics} technologie={language.name} />
                :
                    ""
            }
        </div>
    );
}