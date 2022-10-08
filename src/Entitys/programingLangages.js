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
import gdscript from "./progamimgLanguages/gdscript";
//topics
import cppTopic from "./learningTopics/cppTopic";
import csharpTopic from "./learningTopics/csharpTopic";
import cssTopic from "./learningTopics/cssTopic";
//import gdscriptTopic from "./learningTopics/gdscriptTopic";
import gdscriptTopic from "./learningTopics/gdscriptTopic";
import htmlTopic from "./learningTopics/htmlTopic";
import javascriptTopic from "./learningTopics/javascriptTopic";
import kotlinTopic from "./learningTopics/kotlinTopic";
import markdownTopic from "./learningTopics/markdownTopic";
import pythonTopic from "./learningTopics/pythonTopic";
import typescriptTopic from "./learningTopics/typescriptTopic";


const programingLanguages = {en:[
    {
        name:"Html",
        roadmap:html.en,
        topics:htmlTopic
    },
    {
        name:"C++",
        roadmap:cpp.en,
        topics:cppTopic
    },
    {
        name:"Python",
        roadmap:python.en,
        topics:pythonTopic
    },
    {
        name:"JavaScript",
        roadmap:javascript.en,
        topics:javascriptTopic
    },
    {
        name:"Kotlin",
        roadmap:kotlin.en,
        topics:kotlinTopic
    },
    {
        name:"C#",
        roadmap:csharp.en,
        topics:csharpTopic
    },
    {
        name:"Godot",
        roadmap:gdscript.en,
        topics:gdscriptTopic
    },
    {
        name:"TypeScript",
        roadmap:typescript.en,
        topics:typescriptTopic
    },
    {
        name:"MarkDown",
        roadmap:markdown.en,
        topics:markdownTopic
    },
    {
        name:"Css",
        roadmap:css.en,
        topics:cssTopic
    },
],
br:[

    {
        name:"Html",
        roadmap:html.br,
        topics:htmlTopic
    },
    {
        name:"C++",
        roadmap:cpp.br,
        topics:cppTopic
    },
    {
        name:"Python",
        roadmap:python.br,
        topics:pythonTopic
    },
    {
        name:"JavaScript",
        roadmap:javascript.br,
        topics:javascriptTopic
    },
    {
        name:"Kotlin",
        roadmap:kotlin.br,
        topics:kotlinTopic
    },
    {
        name:"C#",
        roadmap:csharp.br,
        topics:csharpTopic
    },
    {
        name:"GDScript",
        roadmap:gdscript.br,
        topics:gdscriptTopic
    },
    {
        name:"TypeScript",
        roadmap:typescript.br,
        topics:typescriptTopic
    },
    {
        name:"MarkDown",
        roadmap:markdown.br,
        topics:markdownTopic
    },
    {
        name:"Css",
        roadmap:css.br,
        topics:cssTopic
    },
]};
export default programingLanguages;