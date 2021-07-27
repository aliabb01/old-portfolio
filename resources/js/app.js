/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from "vue-router";
import router from "./routes";
import vuetify from './vuetify';
import VueParticles from 'vue-particles'
import Vuex from "vuex";

const store = new Vuex.Store({
    state: {
        darkTheme: false,
        
        portfolioData: [
            {
                img: 'https://picsum.photos/350',
                title: 'Apollon Railway',
                description: 'Railway Reservation System',
                category: 'Web app',
                tags: [
                    'php',
                    'laravel',
                ],
                carouselImg: [
                    'https://picsum.photos/350',
                    'https://picsum.photos/350',
                    'https://picsum.photos/350'
                ],
                longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?',
                links: {
                    github: '',
                    live: ''
                }
            },
            {
                img: 'https://picsum.photos/350',
                title: 'RMS',
                description: 'Restaurant Management System',
                category: 'Web app',
                tags: [
                    'php',
                    'laravel'
                ],
                carouselImg: [
                    'https://picsum.photos/350',
                    'https://picsum.photos/350',
                    'https://picsum.photos/350'
                ],
                longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?',
                links: {
                    github: '',
                    live: ''
                }
            },
            {
                img: '/images/mockups/tweety.png',
                title: 'Tweety',
                description: 'Twitter clone',
                category: 'Website Clone',
                tags: [
                    'php',
                    'laravel'
                ],
                carouselImg: [
                    '/images/mockups/tweety.png',
                    '/images/tweety/tweety1.jpg',
                    '/images/tweety/tweety2.jpg',
                    '/images/tweety/tweety3.jpg',
                    '/images/tweety/tweety4.jpg',
                ],
                longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?',
                links: {
                    github: '',
                    live: ''
                },
                clone: true
            },
            {
                img: '/images/mockups/mycookinglife.png',
                title: 'MyCookingLife',
                description: 'Pastry website',
                category: 'Website',
                tags: [
                    'php',
                    'laravel',
                ],
                carouselImg: [
                    '/images/mockups/mycookinglife.png',
                    '/images/mycookinglife/1.jpg',
                    '/images/mycookinglife/2.jpg',
                    '/images/mycookinglife/3.jpg',
                    '/images/mycookinglife/4.jpg',
                    '/images/mycookinglife/5.jpg',
                    '/images/mycookinglife/6.jpg',
                    '/images/mycookinglife/7.jpg',
                ],
                longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?',
                links: {
                    github: 'https://github.com/aliabb01/My_CookingLife',
                    live: 'https://my-cooking-life.herokuapp.com'
                }
            },
            {
                img: '/images/mockups/erra.png',
                title: 'ERRA',
                description: 'Portfolio website',
                category: 'Website',
                tags: [
                    'php',
                    'laravel',
                    'vue'
                ],
                carouselImg: [
                    '/images/mockups/erra.png',
                    'https://picsum.photos/350',
                    'https://picsum.photos/350'
                ],
                longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?',
                links: {
                    github: '',
                    live: 'https://erra-vue.herokuapp.com'
                }
            },
            {
                img: '/images/mockups/youtubeClone.png',
                title: 'Youtube Clone',
                description: 'YouTube FrontEnd clone',
                category: 'Website Clone',
                tags: [
                    'react',
                    'material-ui',
                    'firebase'
                ],
                carouselImg: [
                    '/images/mockups/youtubeClone.png',
                    '/images/youtubeClone/1.jpg',
                    '/images/youtubeClone/2.jpg',
                ],
                longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?',
                links: {
                    github: 'https://github.com/aliabb01/youtube-clone-visual',
                    live: 'https://clone-b3aa4.web.app/'
                },
                clone: true
            },
            {
                img: '/images/mockups/finance_manager.png',
                title: 'Finager',
                description: 'Finance Manager app',
                category: 'Mobile app',
                tags: [
                    'react',
                    'react-native'
                ],
                carouselImg: [
                    '/images/mockups/finance_manager.png',
                    '/images/financeManager/1.png',
                    '/images/financeManager/2.png',
                ],
                longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?',
                links: {
                    github: '',
                    live: ''
                },
                inDevelopment: true
            }
        ]
    },
    mutations: {
        toggleTheme(state) {
            state.darkTheme = !state.darkTheme
        }
    }
});

Vue.use(VueRouter).use(store).use(VueParticles);


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('app-component', require('./components/App.vue').default);

// import ExampleComponent from './components/ExampleComponent.vue';
import App from './components/App.vue';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router,
    store,
    vuetify
});

export default app
