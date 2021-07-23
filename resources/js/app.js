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

import Vuex from "vuex";

const store = new Vuex.Store({
    state: {
        darkTheme: false,
        
        portfolioData: [
            {
                img: 'https://picsum.photos/350',
                title: 'Apollon Railway',
                description: 'Railway Reservation System',
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
                img: '/images/mockups/smartmockups_mycookinglife.png',
                title: 'MyCookingLife',
                description: 'Sweetmeats website',
                tags: [
                    'php',
                    'laravel',
                ],
                carouselImg: [
                    '/images/mockups/smartmockups_mycookinglife.png',
                    'https://picsum.photos/350',
                    'https://picsum.photos/350'
                ],
                longDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magni, odio ea vel excepturi dignissimos veniam voluptatem voluptatibus quasi ullam?',
                links: {
                    github: 'https://github.com/aliabb01/My_CookingLife',
                    live: 'https://my-cooking-life.herokuapp.com'
                }
            },
            {
                img: 'https://picsum.photos/350',
                title: 'Tweety',
                description: 'Twitter clone',
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
                img: 'https://picsum.photos/350',
                title: 'Tweety',
                description: 'Twitter clone',
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
                img: 'https://picsum.photos/350',
                title: 'Tweety',
                description: 'Twitter clone',
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
                img: 'https://picsum.photos/350',
                title: 'Tweety',
                description: 'Twitter clone',
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
            }
        ]
    },
    mutations: {
        toggleTheme(state) {
            state.darkTheme = !state.darkTheme
        }
    }
});

Vue.use(VueRouter).use(store);


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
