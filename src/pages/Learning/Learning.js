import React,{ useState, useEffect } from "react";
import LanguageMenu from "../../components/LanguageMenu/LanguageMenu";
import Topics from "../../components/Topics/Topics";
import './Learning.css';

export default function Learning(props){
    const [language,setLanguage] = useState(props.lang[0]);
    const setDefaultLanguage = (defaultLanguage)=>{
        for(let count=0;count<props.lang.length;count++){
            if(props.lang[count].name === defaultLanguage){
                setLanguage({
                    ...language,
                    ...props.lang[count]
                });
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
        <div className="page learning">
            <LanguageMenu click={getSelected} languages={props.lang}/>
            {language?
                    <Topics topics={language.topics} technologie={language.name} />
                :
                    ""
            }
        </div>
    );
}