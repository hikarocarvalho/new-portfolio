import React from "react";
import './Home.css';
import myself from "../../Entitys/myself";
export default function Home(){
    return (
        <div className="page">
           <section className="box">
               {myself.map((item,index)=>(
                   <article className="block">
                        <p className="title">
                            {item.title}
                        </p>
                            {item.text.map((text,index2)=>(
                                <p className="text" key={index2}>
                                    {text}
                                </p>
                            ))}
                            {index!==myself.length-1?
                                <hr />
                            :
                                ""
                            }
                    </article>
                   
               ))}
           </section>
        </div>
    );
}