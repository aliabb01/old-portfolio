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
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?",
        links: {
            github: "",
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
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?",
        links: {
            github: "",
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
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?",
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
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?",
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
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?",
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
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?",
        links: {
            github: "https://github.com/aliabb01/vue-weather",
            live: "https://vue-weather-ali.netlify.app/"
        },
        inDevelopment: false,
        featured: false,
    },
    {
        id: 7,
        img: "/images/mockups/erra.png",
        title: "ERRA",
        description: "Portfolio website",
        category: "Website",
        tags: ["php", "laravel", "vue", "bootstrap"],
        carouselImg: [
            "/images/mockups/erra.png",
            "https://picsum.photos/350",
            "https://picsum.photos/350"
        ],
        longDescription:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?",
        links: {
            github: "",
            live: "https://erra-vue.herokuapp.com"
        },
        inDevelopment: false,
        featured: false,
    },
    {
        id: 8,
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
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?",
        links: {
            github: "",
            live: ""
        },
        inDevelopment: true,
        featured: false,
    }
];

export default portfolioData;