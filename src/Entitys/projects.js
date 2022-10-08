import projectsBackEnd from "./projects/projectsBackEnd";
import projectsFrontEnd from "./projects/projectsFrontEnd";
import projectsFullStack from "./projects/projectsFullStack";
import projectsGames from "./projects/projectsGames";

const projects = {
  en: {
    frontEnd: projectsFrontEnd.en,
    backEnd: projectsBackEnd.en,
    fullStack: projectsFullStack.en,
    game: projectsGames.en,
  },
  br: {
    frontEnd: projectsFrontEnd.br,
    backEnd: projectsBackEnd.br,
    fullStack: projectsFullStack.br,
    game: projectsGames.br,
  }
};
export default projects;
