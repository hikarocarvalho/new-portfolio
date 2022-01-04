import React,{useState} from "react";
import LanguageManu from "../../components/LanguageMenu/LanguageMenu";
import './Technologies.css';
import programingLanguages from "../../Entitys/programingLangages";
import LanguageDetail from "../../components/LanguageDetail/LanguageDetail";
export default function Technologies(){
    const [language,setLanguage] = useState();
    const getSelected = (event)=>{
        event.preventDefault();
        console.log(event.target.innerHTML);
        for(let count=0;count<programingLanguages.length;count++){
            if(programingLanguages[count].name === event.target.innerHTML){
                setLanguage(programingLanguages[count]);
            }
        }
    }
    return (
        <div className="page">
            <LanguageManu click={getSelected} languages={programingLanguages}/>
            {language?
                    <LanguageDetail language={language}/>
                :
                    ""
            }
        </div>
    );
}