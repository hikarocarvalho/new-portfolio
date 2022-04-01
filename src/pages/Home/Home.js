import React from "react";
import './Home.css';
export default function Home(props){
    return (
        <div className="page home">
           <section className="box">
               {props.lang.map((item,index)=>(
                   <>
                   {index===0?
                        <hr />
                    :
                        ""
                    }
                   <details className="block">
                        <summary className="title">
                            {item.title}
                        </summary>
                            {item.text.map((text,index2)=>(
                                <p className="text" key={index2}>
                                    {text}
                                </p>
                            ))}
                    </details>

                        <hr />
                    </>
                   
               ))}
           </section>
        </div>
    );
}