import projectManager from './../../imgs/fullStack/projectManager.png';
import petSister from './../../imgs/fullStack/petSister.png';
const projectsFullStack = {
    en:[
        {
            id:1,
            name:"Project manager",
            image:projectManager,
            description:"This project is a system to manage project steps.",
            github:"https://github.com/users/hikarocarvalho/projects/1",
            video:"https://www.youtube.com/embed/Gbt9JnNDh20",
            link:"https://github.com/users/hikarocarvalho/projects/1",
            technologies:["Nodejs","React","Css"],
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
            id:2,
            name:"Pet-Sister Project",
            image:petSister,
            description:"This project is to help people to search for a caregiver for pets!",
            github:"https://github.com/hikarocarvalho/Pet_Sister",
            video:"https://www.youtube.com/embed/nScMMyiVeTs",
            link:"https://github.com/hikarocarvalho/Pet_Sister",
            technologies:["Python"],
            dependency:[
                {
                    name:"Python",
                    use:"Used like the default programming language."
                },
                {
                    name:"Python - Flask",
                    use:"Used to create the front end."
                }
            ]
        },
        
    ],
    br:[
        {
            id:1,
            name:"Gerenciador de Projetos",
            image:projectManager,
            description:"Este projeto é um sistema para gerenciamento de etapas em um projeto.",
            github:"https://github.com/users/hikarocarvalho/projects/1",
            video:"https://www.youtube.com/embed/Gbt9JnNDh20",
            link:"https://github.com/users/hikarocarvalho/projects/1",
            technologies:["Nodejs","React","Css"],
            dependency:[
                {
                    name:"ReactJs",
                    use:"Usado para criar o FrontEnd"
                },
                {
                    name:"NodeJs",
                    use:"Usado para criar a API ('BackEnd')"
                }
            ]
        },
        {
            id:2,
            name:"Projeto Pet-sister",
            image:petSister,
            description:"Este projeto visa encontrar um cuidador disponivel para seu pet quando necessário!",
            github:"https://github.com/hikarocarvalho/Pet_Sister",
            video:"https://www.youtube.com/embed/nScMMyiVeTs",
            link:"https://github.com/hikarocarvalho/Pet_Sister",
            technologies:["Python"],
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
        
    ]
};
export default projectsFullStack;