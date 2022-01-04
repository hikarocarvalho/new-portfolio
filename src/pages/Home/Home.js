import React from "react";
import './Home.css';
import myself from "../../Entitys/myself";
export default function Home(){
    return (
        <div className="page">
           <section className="box">
               {myself.map((item,index)=>(
                   <p>
                       {item}
                       {(myself.length -1 ) !== index?
                       
                            <hr/>
                       :""}
                   </p>
                   
               ))}
           </section>
        </div>
    );
}