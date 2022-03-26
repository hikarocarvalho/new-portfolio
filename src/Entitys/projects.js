import projectsBackEnd from "./projects/projectsBackEnd";
import projectsFrontEnd from "./projects/projectsFrontEnd";
import projectsFullStack from "./projects/projectsFullStack";

const projects = {
  en: {
    frontEnd: projectsFrontEnd.en,
    backEnd: projectsBackEnd.en,
    fullStack: projectsFullStack.en,
  },
  br: {
    frontEnd: projectsFrontEnd.br,
    backEnd: projectsBackEnd.br,
    fullStack: projectsFullStack.br,
  }
};
export default projects;
