import systemToVotes from '../../imgs/backEnd/back_end.png';
import interativeGame from '../../imgs/backEnd/interativeGame.png';
import detetive from "../../imgs/backEnd/detetive.png";
import dados from "../../imgs/backEnd/dados.png";
import jokenpo from "../../imgs/backEnd/jokenpo.png";
const projectsBackEnd = {
    en:[
        {
            id:1,
            name:"Voting System",
            image:systemToVotes,
            description:"This project is a voting game system",
            github:"https://github.com/hikarocarvalho/Blue_Module_01/blob/main/projetos/Projeto_04_Simulador_de_Votacao.py",
            video:"https://www.youtube.com/embed/KfrmZBAGzUQ",
            link:"https://github.com/hikarocarvalho/Blue_Module_01/blob/main/projetos/Projeto_04_Simulador_de_Votacao.py",
            technologies:["Python"],
            dependency:[
                {
                    name:"Python",
                    use:"Used like default programming language."
                }
            ]
        },
        {
            id:2,
            name:"Interactive Game",
            image:interativeGame,
            description:"This project is a terror with suspense game",
            github:"https://github.com/hikarocarvalho/Interactive_Game",
            video:"https://www.youtube.com/embed/fYt06-tc6mg",
            link:"https://github.com/hikarocarvalho/Interactive_Game",
            technologies:["Python"],
            dependency:[
                {
                    name:"Python",
                    use:"Used like default programming language."
                },
                {
                    name:"PyGame",
                    use:"Used to add sons inside the game"
                }
            ]
        },
        {
            id:3,
            name:"Detective",
            image:detetive,
            description:"This project is a detective game. Answering all questions you get, the killer",
            github:"https://github.com/hikarocarvalho/Blue_Module_01/blob/main/projetos/Projeto_01_%E2%80%93_Detetive.ipynb",
            video:"https://www.youtube.com/embed/P_NrJzLgV8A",
            link:"",
            technologies:["Python"],
            dependency:[
                {
                    name:"Python",
                    use:"Used like default programming language."
                }
            ]
        },
        {
            id:4,
            name:"Roll of Dice",
            image:dados,
            description:"This project is a game, rolling dices you can win.",
            github:"https://github.com/hikarocarvalho/Blue_Module_01/blob/main/projetos/Projeto_03_Roleta_de_dados_final.py",
            video:"https://www.youtube.com/embed/eajNWVK5eQo",
            link:"",
            technologies:["Python"],
            dependency:[
                {
                    name:"Python",
                    use:"Used like default programming language."
                }
            ]
        },
        {
            id:5,
            name:"Jokenpo",
            image:jokenpo,
            description:"This project is a reproduction of the popular game Jokenpo.",
            github:"https://github.com/hikarocarvalho/Blue_Module_01/blob/main/projetos/Projeto_02_jogo_Jokenpo.py",
            video:"https://www.youtube.com/embed/kOi3qBlhwZE",
            link:"",
            technologies:["Python"],
            dependency:[
                {
                    name:"Python",
                    use:"Used like default programming language."
                }
            ]
        }
    ],
    br:[
        {
            id:1,
            name:"Sistema de votação",
            image:systemToVotes,
            description:"Neste Projeto Foi construido como um jogo de contagem de votação",
            github:"https://github.com/hikarocarvalho/Blue_Module_01/blob/main/projetos/Projeto_04_Simulador_de_Votacao.py",
            video:"https://www.youtube.com/embed/KfrmZBAGzUQ",
            link:"https://github.com/hikarocarvalho/Blue_Module_01/blob/main/projetos/Projeto_04_Simulador_de_Votacao.py",
            technologies:["Python"],
            dependency:[
                {
                    name:"Python",
                    use:"Usado como linguagem do projeto"
                }
            ]
        },
        {
            id:2,
            name:"Jogo Interativo",
            image:interativeGame,
            description:"Neste Projeto Foi construido como um jogo de Terror e suspense",
            github:"https://github.com/hikarocarvalho/Interactive_Game",
            video:"https://www.youtube.com/embed/fYt06-tc6mg",
            link:"https://github.com/hikarocarvalho/Interactive_Game",
            technologies:["Python"],
            dependency:[
                {
                    name:"Python",
                    use:"Usado como linguagem do projeto"
                },
                {
                    name:"PyGame",
                    use:"Usado pada adicionar sons ao game"
                }
            ]
        },
        {
            id:3,
            name:"Detetive",
            image:detetive,
            description:"Neste Projeto Foi construido um cosole game onde suas escolhas levam ao culpado",
            github:"https://github.com/hikarocarvalho/Blue_Module_01/blob/main/projetos/Projeto_01_%E2%80%93_Detetive.ipynb",
            video:"https://www.youtube.com/embed/P_NrJzLgV8A",
            link:"",
            technologies:["Python"],
            dependency:[
                {
                    name:"Python",
                    use:"Usado como linguagem do projeto"
                }
            ]
        },
        {
            id:4,
            name:"Roleta de dados",
            image:dados,
            description:"Neste Projeto Foi construido um cosole game onde os jogadores competem com o rolar de dados",
            github:"https://github.com/hikarocarvalho/Blue_Module_01/blob/main/projetos/Projeto_03_Roleta_de_dados_final.py",
            video:"https://www.youtube.com/embed/eajNWVK5eQo",
            link:"",
            technologies:["Python"],
            dependency:[
                {
                    name:"Python",
                    use:"Usado como linguagem do projeto"
                }
            ]
        },
        {
            id:5,
            name:"Jokenpô",
            image:jokenpo,
            description:"Neste Projeto Foi construido um cosole game onde é possivel jogar pedra, papel e tesoura: contra o computador",
            github:"https://github.com/hikarocarvalho/Blue_Module_01/blob/main/projetos/Projeto_02_jogo_Jokenpo.py",
            video:"https://www.youtube.com/embed/kOi3qBlhwZE",
            link:"",
            technologies:["Python"],
            dependency:[
                {
                    name:"Python",
                    use:"Usado como linguagem do projeto"
                }
            ]
        }
    ]
};

export default projectsBackEnd;