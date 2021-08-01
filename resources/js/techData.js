import moment from "moment";

const calculateDiff = (then) => {
    const now = moment();
    const years = now.diff(then, 'year');
    then.add(years, 'years');

    const months = now.diff(then, 'months');
    then.add(months, 'months');

    const days = now.diff(then, 'days');
    then.add(days, 'days');

    const experience = (years ? (years + " years ") : '') + (months ? ( months + (months==1 ? " month " : " months ")) : (days + " days "));
    return experience;
}

const htmlExperience = calculateDiff(moment("20200123"));

const cssExperience = calculateDiff(moment("20200123"));

const bootstrapExperience = calculateDiff(moment("20200201"));

const jsExperience = calculateDiff(moment("20200310"));

const jQExperience = calculateDiff(moment("20200401"));

const laravelExperience = calculateDiff(moment("20200210"));

const vueExperience = calculateDiff(moment("20210501"));

const nuxtExperience = calculateDiff(moment("20210615"));

const reactExperience = calculateDiff(moment("20210501"));

const figmaExperience = calculateDiff(moment("20210715"));



const techData = [
    {
        id: 1,
        imgSrc: '/images/techlogos/html.svg',
        name: 'HTML',
        description: "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
        experience: htmlExperience,
        experienceLevel: 95
    },
    {
        id: 2,
        imgSrc: '/images/techlogos/css.svg',
        name: 'CSS',
        description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript",
        experience: cssExperience,
        experienceLevel: 87
    },
    {
        id: 3,
        imgSrc: '/images/techlogos/bootstrap.svg',
        name: 'Bootstrap',
        description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components',
        experience: bootstrapExperience,
        experienceLevel: 80
    },
    {
        id: 4,
        imgSrc: '/images/techlogos/js.svg',
        name: 'JavaScript',
        description: 'JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user',
        experience: jsExperience,
        experienceLevel: 75
    },
    {
        id: 5,
        imgSrc: '/images/techlogos/jquery.svg',
        name: 'jQuery',
        description: 'jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax',
        experience: jQExperience,
        experienceLevel: 65
    },
    {
        id: 6,
        imgSrc: '/images/techlogos/laravel.svg',
        name: 'Laravel',
        description: 'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern',
        experience: laravelExperience,
        experienceLevel: 70
    },
    {
        id: 7,
        imgSrc: '/images/techlogos/vue.svg',
        name: 'Vue',
        description: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications',
        experience: vueExperience,
        experienceLevel: 70
    },
    {
        id: 8,
        imgSrc: '/images/techlogos/nuxt.svg',
        name: 'Nuxt',
        description: 'Nuxt.js is a free and open source web application framework based on Vue.js, Node.js, Webpack and Babel.js.',
        experience: nuxtExperience,
        experienceLevel: 35
    },
    {
        id: 9,
        imgSrc: '/images/techlogos/react.svg',
        name: 'React',
        description: 'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications',
        experience: reactExperience,
        experienceLevel: 65
    },
    {
        id: 10,
        imgSrc: '/images/techlogos/figma.svg',
        name: 'Figma',
        description: 'Figma is a web-based graphics editing and user interface design app. It can be used to do all kinds of graphic design work from wireframing websites, designing mobile app interfaces, prototyping designs, crafting social media posts, and everything in between',
        experience: figmaExperience,
        experienceLevel: 35
    }
];

export default techData;