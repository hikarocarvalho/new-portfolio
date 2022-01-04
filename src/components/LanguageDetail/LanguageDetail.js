import React,{useEffect, useState} from "react";
import './LanguageDetail.css';

export default function LanguageDetail(props){
    const [language,setLanguage] = useState(props.language);
    useEffect(()=>{
        setLanguage(props.language);
    },[props.language.name])
    console.log(language)
    return (
        <div className="language-detail">
            <table>
                <thead>
                    <tr>
                        <th>{language.name}</th>
                    </tr>
                    <tr>
                        <th>RoadMap Check</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ul>
                                {
                                    language.roadmap.map((item,index)=>(
                                        
                                        <li>
                                            <label >
                                                <input key={index} type="checkbox" value={item.name} />
                                                {item.name}
                                            </label>
                                            <ul>
                                                {item.topic.map((subitem,index2)=>(
                                                    <li key={index2}>
                                                        <label>
                                                            <input  type="checkbox" checked={subitem.checked} name={subitem.name} />
                                                            {subitem.name}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    

                                    ))
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}