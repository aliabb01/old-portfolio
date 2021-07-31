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

import portfolioD from './portfolioData';
import techD from './techData';

const store = new Vuex.Store({
    state: {
        darkTheme: false,
        portfolioData: portfolioD,
        selectedTech: 0,
        techData: techD
    },
    mutations: {
        toggleTheme(state) {
            state.darkTheme = !state.darkTheme;
            if(state.darkTheme) {
                localStorage.setItem('darkTheme', true);
            }
            else {
                localStorage.removeItem('darkTheme')
            }
        },
        toggleSelected(state, index) {
            state.selectedTech = index;
        },
        initialiseStore(state) {
            if(localStorage.getItem('darkTheme')) {
                state.darkTheme = true;
                // console.log("Theme preference:", state.darkTheme ? 'DARK' : 'LIGHT')
            }
            else {
                state.darkTheme = false;
                // console.log("Theme preference:", state.darkTheme ? 'DARK' : 'LIGHT')
            }
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
