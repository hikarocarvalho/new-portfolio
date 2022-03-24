import React from "react";
import './Home.css';
export default function Home(props){
    return (
        <div className="page">
           <section className="box">
               {props.lang.map((item,index)=>(
                   <article className="block">
                        <p className="title">
                            {item.title}
                        </p>
                            {item.text.map((text,index2)=>(
                                <p className="text" key={index2}>
                                    {text}
                                </p>
                            ))}
                            {index!==props.lang.length-1?
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