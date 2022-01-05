// technologies
import cpp from "./progamimgLanguages/cpp";
import csharp from "./progamimgLanguages/csharp";
import css from "./progamimgLanguages/css";
//import gdscript from "./progamimgLanguages/gdscript";
import html from "./progamimgLanguages/html";
import javascript from "./progamimgLanguages/javascript";
import kotlin from "./progamimgLanguages/kotlin";
import markdown from "./progamimgLanguages/markdown";
import python from "./progamimgLanguages/python";
import typescript from "./progamimgLanguages/typescript";
//topics
import cppTopic from "./learningTopics/cppTopic";
import csharpTopic from "./learningTopics/csharpTopic";
import cssTopic from "./learningTopics/cssTopic";
//import gdscriptTopic from "./learningTopics/gdscriptTopic";
import htmlTopic from "./learningTopics/htmlTopic";
import javascriptTopic from "./learningTopics/javascriptTopic";
import kotlinTopic from "./learningTopics/kotlinTopic";
import markdownTopic from "./learningTopics/markdownTopic";
import pythonTopic from "./learningTopics/pythonTopic";
import typescriptTopic from "./learningTopics/typescriptTopic";


const programingLanguages = [
    {
        name:"C++",
        roadmap:cpp,
        topics:cppTopic
    },
    {
        name:"Python",
        roadmap:python,
        topics:pythonTopic
    },
    {
        name:"JavaScript",
        roadmap:javascript,
        topics:javascriptTopic
    },
    {
        name:"Kotlin",
        roadmap:kotlin,
        topics:kotlinTopic
    },
    {
        name:"C#",
        roadmap:csharp,
        topics:csharpTopic
    },
    /*{
        name:"GDScript",
        roadmap:gdscript,
        topics:gdscriptTopic
    },*/
    {
        name:"TypeScript",
        roadmap:typescript,
        topics:typescriptTopic
    },
    {
        name:"MarkDown",
        roadmap:markdown,
        topics:markdownTopic
    },
    {
        name:"Html",
        roadmap:html,
        topics:htmlTopic
    },
    {
        name:"Css",
        roadmap:css,
        topics:cssTopic
    },
];
export default programingLanguages;