import en from './en';
import br from './br';
const Language =(value)=>{
    switch(value){
        case "br":
            return br;
        case "en":
            return en;
        default:
            return en;
    }
}
Language("en");
export default Language;