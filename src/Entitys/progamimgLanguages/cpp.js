const cpp = [
    {
        name:"Basic concepts",
        topic:[
            {
                name:"Comments",
                checked:false
            },
            {
                name:"ASCII chart",
                checked:false
            },
            {
                name:"Punctuators",
                checked:false
            },
            {
                name:"Names and identifiers",
                checked:false
            },
            {
                name:"Types – Fundamental types",
                checked:false
            },
            {
                name:"Object – Scope – Lifetime",
                checked:false
            },
            {
                name:"Definitions and ODR",
                checked:false
            },
            {
                name:"Name lookup",
                checked:false
            },
            {
                name:"qualified – unqualified (ADL)",
                checked:false
            },
            {
                name:"As-if rule",
                checked:false
            },
            {
                name:"Undefined behavior",
                checked:false
            },
            {
                name:"Memory model and data races",
                checked:false
            },
            {
                name:"Character sets and encodings",
                checked:false
            },
            {
                name:"Phases of translation",
                checked:false
            },
            {
                name:"The main function",
                checked:false
            },
            {
                name:"Modules (C++20)",
                checked:false
            },
        ]
    },
    {
        name:"Keywords Preprocessor",
        topic:[
            {
                name:"#if - #ifdef - #ifndef - #elif",
                checked:false
            },
            {
                name:"#elifdef - #elifndef(C++23)",
                checked:false
            },
            {
                name:"#define - # - ##",
                checked:false
            },
            {
                name:"#include - #pragma",
                checked:false
            },
            {
                name:"#line - #error",
                checked:false
            },
        ]
    },
    {
        name:"Expressions",
        topic:[
            {
                name:"Value categories",
                checked:false
            },
            {
                name:"Evaluation order and sequencing",
                checked:false
            },
            {
                name:"Constant expressions",
                checked:false
            },
            {
                name:"Operators",
                checked:false
            },
            {
                name:"assignment – arithmetic",
                checked:false
            },
            {
                name:"increment and decrement",
                checked:false
            },
            {
                name:"logical – comparison",
                checked:false
            },
            {
                name:"member access and indirection",
                checked:false
            },
            {
                name:"call, comma, ternary",
                checked:false
            },
            {
                name:"sizeof – alignof (C++11)",
                checked:false
            },
            {
                name:"new – delete – typeid",
                checked:false
            },
            {
                name:"Operator overloading",
                checked:false
            },
            {
                name:"Default comparisons (C++20)",
                checked:false
            },
            {
                name:"Operator precedence",
                checked:false
            },
            {
                name:"Conversions",
                checked:false
            },
            {
                name:"implicit – explicit – user-defined",
                checked:false
            },
            {
                name:"static_cast – dynamic_cast",
                checked:false
            },
            {
                name:"const_cast – reinterpret_cast",
                checked:false
            },
            {
                name:"Literals",
                checked:false
            },
            {
                name:"boolean – integer – floating",
                checked:false
            },
            {
                name:"character – string",
                checked:false
            },
            {
                name:"nullptr (C++11)",
                checked:false
            },
            {
                name:"user-defined (C++11)",
                checked:false
            },
        ]
    },
    {
        name:"Declarations",
        topic:[
            {
                name:"Namespace declaration",
                checked:false
            },      {
                name:"Namespace alias",
                checked:false
            },
            {
                name:"References – Pointers – Arrays",
                checked:false
            },
            {
                name:"Structured bindings (C++17)",
                checked:false
            },
            {
                name:"Enumerations and enumerators",
                checked:false
            },
            {
                name:"Storage duration and linkage",
                checked:false
            },
            {
                name:"Translation-unit-local (C++20)",
                checked:false
            },
            {
                name:"Language linkage",
                checked:false
            },
            {
                name:"inline specifier",
                checked:false
            },
            {
                name:"Inline assembly",
                checked:false
            },
            {
                name:"const/volatile – constexpr (C++11)",
                checked:false
            },
            {
                name:"consteval (C++20) – constinit (C++20)",
                checked:false
            },
            {
                name:"decltype (C++11) – auto (C++11)",
                checked:false
            },
            {
                name:"typedef – Type alias (C++11)",
                checked:false
            },
            {
                name:"Elaborated type specifiers",
                checked:false
            },
            {
                name:"Attributes (C++11) – alignas (C++11)",
                checked:false
            },
            {
                name:"static_assert (C++11)",
                checked:false
            },
        ]
    },
    {
        name:"Initialization",
        topic:[
            {
                name:"Default initialization",
                checked:false
            },
            {
                name:"Value initialization",
                checked:false
            },
            {
                name:"Copy initialization",
                checked:false
            },
            {
                name:"Direct initialization",
                checked:false
            },
            {
                name:"Aggregate initialization",
                checked:false
            },
            {
                name:"List initialization (C++11)",
                checked:false
            },
            {
                name:"Reference initialization",
                checked:false
            },
            {
                name:"Static non-local initialization",
                checked:false
            },
            {
                name:"zero – constant",
                checked:false
            },
            {
                name:"Dynamic non-local initialization",
                checked:false
            },
            {
                name:"ordered – unordered",
                checked:false
            },
            {
                name:"Copy elision",
                checked:false
            }
        ]
    },
    {
        name:"Functions",
        topic:[
            {
                name:"Function declaration",
                checked:false
            },
            {
                name:"Default arguments",
                checked:false
            },
            {
                name:"Variadic arguments",
                checked:false
            },
            {
                name:"Lambda expression (C++11)",
                checked:false
            },
            {
                name:"Argument-dependent lookup",
                checked:false
            },
            {
                name:"Overload resolution",
                checked:false
            },
            {
                name:"Operator overloading",
                checked:false
            },
            {
                name:"Address of an overload set",
                checked:false
            },
            {
                name:"Coroutines (C++20)",
                checked:false
            },
            
        ]
    },
    {
        name:"Statements",
        topic:[
            {
                name:"if – switch",
                checked:false
            },
            {
                name:"for – range-for (C++11)",
                checked:false
            },
            {
                name:"while – do-while",
                checked:false
            },
            {
                name:"continue – break – goto – return",
                checked:false
            },
            {
                name:"synchronized and atomic (TM TS)",
                checked:false
            },
        ]
    },
    {
        name:"Classes",
        topic:[
            {
                name:"Class types – Union types",
                checked:false
            },
            {
                name:"injected-class-name",
                checked:false
            },
            {
                name:"Data members – Bit fields",
                checked:false
            },
            {
                name:"Member functions – The this pointer",
                checked:false
            },
            {
                name:"Static members – Nested classes",
                checked:false
            },
            {
                name:"Derived class – using-declaration",
                checked:false
            },
            {
                name:"Empty base optimization",
                checked:false
            },
            {
                name:"Virtual function – Abstract class",
                checked:false
            },
            {
                name:"override (C++11) – final (C++11)",
                checked:false
            },
            {
                name:"Member access – friend",
                checked:false
            },
            {
                name:"Constructors and member initializer lists",
                checked:false
            },
            {
                name:"Default constructor – Destructor",
                checked:false
            },
            {
                name:"Copy constructor – Copy assignment",
                checked:false
            },
            {
                name:"Move constructor (C++11)",
                checked:false
            },
            {
                name:"Move assignment (C++11)",
                checked:false
            },
            {
                name:"Converting constructor – explicit specifier",
                checked:false
            },
        ]
    },
    {
        name:"Templates",
        topic:[
            {
                name:"Template parameters and arguments",
                checked:false
            },
            {
                name:"Class template – Function template",
                checked:false
            },
            {
                name:"Variable template (C++14)",
                checked:false
            },
            {
                name:"Class member template",
                checked:false
            },
            {
                name:"Template argument deduction",
                checked:false
            },
            {
                name:"Class template argument deduction (C++17)",
                checked:false
            },
            {
                name:"Explicit specialization – Partial specialization",
                checked:false
            },
            {
                name:"Parameter packs (C++11) – sizeof... (C++11)",
                checked:false
            },
            {
                name:"Fold-expressions (C++17)",
                checked:false
            },
            {
                name:"Dependent names – SFINAE",
                checked:false
            },
            {
                name:"Constraints and concepts (C++20)",
                checked:false
            },
        ]
    },
    {
        name:"Exceptions",
        topic:[
            {
                name:"throw-expression",
                checked:false
            },
            {
                name:"try-catch block",
                checked:false
            },
            {
                name:"function-try-block",
                checked:false
            },
            {
                name:"noexcept specifier (C++11)",
                checked:false
            },
            {
                name:"noexcept operator (C++11)",
                checked:false
            },
            {
                name:"Dynamic exception specification (until C++17)",
                checked:false
            },
        ]
    },
    {
        name:"Miscellaneous",
        topic:[
            {
                name:"History of C++",
                checked:false
            },
            {
                name:"Extending the namespace std",
                checked:false
            },
            {
                name:"Acronyms",
                checked:false
            },
        ]
    },
    {
        name:"Idioms",
        topic:[
            {
                name:"Resource acquisition is initialization",
                checked:false
            },
            {
                name:"Rule of three/five/zero",
                checked:false
            },
            {
                name:"Pointer to implementation",
                checked:false
            },
            {
                name:"Zero-overhead principle",
                checked:false
            },
        ]
    }
];

export default cpp;
