import './ItemTechnologies.css';
import icons from "../../imgs/technologies/technologieImages";

export default function ItemTechnologies(props){
    return (
        <article className='item_technologie'>
            <header>
            <figure>
                <img src={icons[props.name]} alt={props.name} className="technologie_image" />
                <figcaption>{props.name}</figcaption>
            </figure>
                {props.description.name}
            </header>
            <p className='certificates'>
                {props.description.certificates.map((item,count)=>
                    <a href={item.link} key={count}>{item.name}</a>
                )}
            </p>
        </article>
    );
}