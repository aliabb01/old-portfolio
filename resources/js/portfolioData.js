const portfolioData = [
    {
        id: 1,
        img: "/images/mockups/rrw.png",
        title: "Apollon Railway",
        description: "Railway Reservation System",
        category: "Web app",
        tags: ["php", "laravel", "stripe", "bootstrap"],
        carouselImg: [
            "/images/mockups/rrw.png",
            "/images/rrw/1.jpg",
            "/images/rrw/2.jpg",
            "/images/rrw/3.jpg",
            "/images/rrw/4.jpg",
            "/images/rrw/5.jpg",
            "/images/rrw/6.jpg",
            "/images/rrw/7.jpg"
        ],
        longDescription:
            `This project was one of my first big projects that I did when learning web development. 
            It was given to me and my team from our university course called Software Engineering.
            During this project, I got acquainted with technologies such as Laravel, PHP and MVC.
            `,
        links: {
            github: "https://github.com/aliabb01/RRW",
            live: ""
        },
        inDevelopment: false,
        featured: false,
    },
    // {
    //     img: 'https://picsum.photos/350',
    //     title: 'RMS',
    //     description: 'Restaurant Management System',
    //     category: 'Web app',
    //     tags: [
    //         'php',
    //         'laravel'
    //     ],
    //     carouselImg: [
    //         'https://picsum.photos/350',
    //         'https://picsum.photos/350',
    //         'https://picsum.photos/350'
    //     ],
    //     longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?',
    //     links: {
    //         github: '',
    //         live: ''
    //     }
    // },
    {
        id: 2,
        img: "/images/mockups/tweety.png",
        title: "Tweety",
        description: "Twitter clone",
        category: "Website Clone",
        tags: ["php", "laravel", "tailwind"],
        carouselImg: [
            "/images/mockups/tweety.png",
            "/images/tweety/tweety1.jpg",
            "/images/tweety/tweety2.jpg",
            "/images/tweety/tweety3.jpg",
            "/images/tweety/tweety4.jpg"
        ],
        longDescription:
            `I completed this project during the Laravel 6 From Scratch Course from Laracasts.
            This web app was mostly Backend oriented, however, it also has a friendly UI.
            After finishing the tutorial, course instructor gave about 9 extra tasks (like, dislike functionalities and so on) to complete by myself.
            `,
        links: {
            github: "https://github.com/aliabb01/tweety",
            live: ""
        },
        clone: true,
        inDevelopment: false,
        featured: false,
    },
    {
        id: 3,
        img: "/images/mockups/mycookinglife.png",
        title: "MyCookingLife",
        description: "Pastry website",
        category: "Website",
        tags: ["php", "laravel", "bootstrap"],
        carouselImg: [
            "/images/mockups/mycookinglife.png",
            "/images/mycookinglife/1.jpg",
            "/images/mycookinglife/2.jpg",
            "/images/mycookinglife/3.jpg",
            "/images/mycookinglife/4.jpg",
            "/images/mycookinglife/5.jpg",
            "/images/mycookinglife/6.jpg",
            "/images/mycookinglife/7.jpg"
        ],
        longDescription:
            `This website was one of my first freelancing works that I have done.
            It was build for an online sweets selling business as a portfolio.
            Project has functionalities such as login, contact form email sending, email subscription, view and/or delete
            email subscribers from admin dashboard and so on.
            `,
        links: {
            github: "https://github.com/aliabb01/My_CookingLife",
            live: "https://my-cooking-life.herokuapp.com"
        },
        inDevelopment: false,
        featured: false,
    },
    {
        id: 4,
        img: "/images/mockups/youtubeClone.png",
        title: "Youtube Clone",
        description: "YouTube Frontend clone",
        category: "Website Clone",
        tags: ["react", "material-ui", "firebase"],
        carouselImg: [
            "/images/mockups/youtubeClone.png",
            "/images/youtubeClone/1.jpg",
            "/images/youtubeClone/2.jpg"
        ],
        longDescription:
            `I completed this project while learning React, a component based frontend library
            that helps building reusable UI. It was my first ever clone project that I did, however,
            I tried making it look as similar to YouTube UI as possible. The project is hosted on Firebase`,
        links: {
            github: "https://github.com/aliabb01/youtube-clone-visual",
            live: "https://clone-b3aa4.web.app/"
        },
        clone: true,
        inDevelopment: false,
        featured: true
    },
    {
        id: 5,
        img: "/images/mockups/facebookClone.png",
        title: "Facebook Clone",
        description: "Facebook Frontend clone",
        category: "Website Clone",
        tags: ["react", "material-ui", "firebase"],
        carouselImg: [
            "/images/mockups/facebookClone.png",
            "/images/facebookClone/1.jpg",
            "/images/facebookClone/2.jpg"
        ],
        longDescription:
            `After completing YouTube clone project, I wanted to test and sharpen my React skills, 
            so I started working on this project. It was a tutorial based project, but here and there
            I implemented my own UI and functionality. Project has functionalities such as sign in using Google, add post, like a post.`,
        links: {
            github: "https://github.com/aliabb01/facebook-clone",
            live: "https://facebook-clone-e3631.web.app/"
        },
        clone: true,
        inDevelopment: false,
        featured: true
    },
    {
        id: 6,
        img: "/images/mockups/vw.png",
        title: "Vue Weather",
        description: "Current weather retriever",
        category: "Web app",
        tags: ["vue", "open-weather-api"],
        carouselImg: [
            "/images/mockups/vw.png",
            "/images/vueWeather/1.jpg",
            "/images/vueWeather/2.jpg"
        ],
        longDescription:
            `Vue Weather was the first project that introduced me to 
            component based architecture. I learned Vue js and ecosystem around it (Vue-Router, Vuex) and I thought
            it was time for me to build a useful project with Vue js. I have built a similar app before
            but I used node.js for it and it didn't have a UI.`,
        links: {
            github: "https://github.com/aliabb01/vue-weather",
            live: "https://vue-weather-ali.netlify.app/"
        },
        inDevelopment: false,
        featured: false,
    },
    // {
    //     id: 7,
    //     img: "/images/mockups/erra.png",
    //     title: "ERRA",
    //     description: "Portfolio website",
    //     category: "Website",
    //     tags: ["php", "laravel", "vue", "bootstrap"],
    //     carouselImg: [
    //         "/images/mockups/erra.png",
    //     ],
    //     longDescription:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?",
    //     links: {
    //         github: "",
    //         live: ""
    //     },
    //     inDevelopment: false,
    //     featured: false,
    // },
    {
        id: 7,
        img: "/images/mockups/finance_manager.png",
        title: "Finager",
        description: "Finance Manager app",
        category: "Mobile app",
        tags: ["react", "react-native"],
        carouselImg: [
            "/images/mockups/finance_manager.png",
            "/images/financeManager/1.png",
            "/images/financeManager/2.png"
        ],
        longDescription:
            `After learning both Vue and React, and bulding a few projects in both of them
            I thought I needed to learn mobile app development. React Native was my first choice
            as I was already familiar with React. It is in development process`,
        links: {
            github: "https://github.com/aliabb01/finance-manager-rn",
            live: ""
        },
        inDevelopment: true,
        featured: false,
    },
    {
        id: 8,
        img: "/images/coming_soon.jpg",
        title: "EvAl",
        description: "Real Estate Marketplace",
        category: "Web app",
        tags: ["php", "laravel", "vuejs", "api", "stripe"],
        carouselImg: [
            "/images/coming_soon.jpg"
        ],
        longDescription:
            `This project will be a web SPA (single page application) and it will be an online platform/marketplace
            for searching for Real Estate that one might buy or rent. It is in development process`,
        links: {
            github: "https://github.com/aliabb01/EvAl",
            live: ""
        },
        inDevelopment: true,
        featured: false,
    },
];

export default portfolioData;