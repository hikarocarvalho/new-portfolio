import projectManager from './../../imgs/fullStack/projectManager.png';
import petSister from './../../imgs/fullStack/petSister.png';
const projectsFullStack = [
    {
        id:1,
        name:"Project manager",
        image:projectManager,
        description:"This project have front-end(React js) and back-end(node)",
        github:"https://github.com/hikarocarvalho/module-03-final-project",
        github2:"https://github.com/hikarocarvalho/module-03-node-final-project",
        video:"https://www.youtube.com/embed/zh-Pxq-0sKE",
        link:"",
        dependency:[
            {
                name:"ReactJs",
                use:"Used to create the Front-End"
            },
            {
                name:"NodeJs",
                use:"Used to create the Back-End API"
            }
        ]
    },
    {
        id:1,
        name:"Projeto Pet-sister",
        image:petSister,
        description:"Este projeto visa encontrar um cuidador disponivel para seu pet quando necessário!",
        github:"https://github.com/hikarocarvalho/Recreate_Project_03_Blue_Module_02",
        video:"https://www.youtube.com/embed/nScMMyiVeTs",
        link:"",
        dependency:[
            {
                name:"Python",
                use:"usado para criar o back end"
            },
            {
                name:"Python - Flask",
                use:"usado para criar o front end"
            }
        ]
    },
    
];
export default projectsFullStack;