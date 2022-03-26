import React,{useState,useEffect} from "react";
import LanguageMenu from "../../components/LanguageMenu/LanguageMenu";
import './Technologies.css';
import LanguageDetail from "../../components/LanguageDetail/LanguageDetail";
export default function Technologies(props){
    const [language,setLanguage] = useState();
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
        setLanguage({
            ...language,
            ...props.lang[0],
        })
    },[props.lang])
    return (
        <div className="page technologie">
            <LanguageMenu click={getSelected} languages={props.lang}/>
            {language?
                    <LanguageDetail language={language}/>
                :
                    ""
            }
        </div>
    );
}