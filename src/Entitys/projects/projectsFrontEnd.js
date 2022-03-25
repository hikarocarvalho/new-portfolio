import smile from "../../imgs/frontEnd/humor.png";
import calculator from "../../imgs/frontEnd/calculator.png";
import timer from "../../imgs/frontEnd/timer.png";
import css3d from "../../imgs/frontEnd/css3d.png";
const projectsFrontEnd = [
    {
        id:1,
        name:"Projeto de Humor",
        image:smile,
        description:"Este projeto visa demonstrar algo que gosto em forma de humor",
        github:"https://github.com/hikarocarvalho/Blue_Module_02/tree/main/projects/project01",
        video:"https://www.youtube.com/embed/CSEktaEeNFU",
        link:"",
        dependency:[
            {
                name:"Html",
                use:"Usado na estrutura básica"
            },
            {
                name:"Css",
                use:"Usado na estrutura para estilização"
            },
            {
                name:"Javascript",
                use:"Usado na manipulação do dom"
            }
        ]
    },
    {
        id:2,
        name:"Calculadora",
        image:calculator,
        description:"Este projeto é referente a uma calculadora Comum",
        github:"https://github.com/hikarocarvalho/Calculator",
        video:"https://www.youtube.com/embed/8yICL_I9aPU",
        link:"",
        dependency:[
            {
                name:"Html",
                use:"Usado na estrutura básica"
            },
            {
                name:"Css",
                use:"Usado na estrutura para estilização"
            },
            {
                name:"Javascript",
                use:"Usado na manipulação do dom"
            }
        ]
    },
    {
        id:3,
        name:"Timer",
        image:timer,
        description:"Este projeto é referente a uma timer Comum",
        github:"https://github.com/hikarocarvalho/Timer",
        video:"https://www.youtube.com/embed/Fpw22v40TOY",
        link:"",
        dependency:[
            {
                name:"Html",
                use:"Usado na estrutura básica"
            },
            {
                name:"Css",
                use:"Usado na estrutura para estilização"
            },
            {
                name:"Javascript",
                use:"Usado na manipulação do dom"
            }
        ]
    },
    {
        id:4,
        name:"Css 3d test",
        image:css3d,
        description:"Este projeto é referente a um teste para aplicar propriedades 3d aos componentes",
        github:"https://github.com/hikarocarvalho/studyingcss3d",
        video:"https://www.youtube.com/embed/DRVqEpmqH_c",
        link:"",
        dependency:[
            {
                name:"Html",
                use:"Usado na estrutura básica"
            },
            {
                name:"Css",
                use:"Usado na estrutura para estilização"
            },
            {
                name:"Javascript",
                use:"Usado na manipulação do dom"
            }
        ]
    }
];

export default projectsFrontEnd;