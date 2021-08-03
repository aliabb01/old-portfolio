<template>
    <div class="navbar" :style="darkTheme ? {backgroundColor: darkNavbar} : {backgroundColor: lightNavbar}">
        
        <v-row class="justify-content-around align-items-center">
            <!-- <div class="nav-link brand text-center">
                <router-link to="/" >
                    <v-avatar size="5rem" color="white">
                        <img src="/images/logo.svg" alt="John" />
                    </v-avatar>
                </router-link>
            </div> -->
            <div class="nav">
                <router-link to="/" class="navlink mx-2">Home</router-link>
                <router-link to="/about" class="navlink mx-2">About</router-link>
                <router-link @click.native="scroll('portfolio')" to="/" class="navlink mx-2">Projects</router-link>
                <router-link @click.native="scroll('contact-me')" to="/" class="navlink mx-2">Contact Me</router-link>
            </div>
            <div style="display: flex;" >
                
                <!-- Writing :value instead of v-model removes console error (no setter)
                    But on refresh the switch is incorrect
                -->
                <v-switch
                    inset
                    color="yellow"
                    v-model="theme"
                    @click="toggleTheme(darkTheme)"
                >
                </v-switch>
                <v-icon v-if="darkTheme" color="yellow" size="40" >                        
                    
                    mdi-lightbulb
                </v-icon>
                <v-icon v-if="!darkTheme" color="#e5e5e5" size="40">
                   
                    mdi-lightbulb
                </v-icon>
                
            </div>
        </v-row>
        
    </div>
</template>

<script>
import themes from '../themes';
import { mapState, mapMutations } from 'vuex';

import scrollToID from '../helpers/scrollToID';

export default {
    data() {
        return {
            // darkMode: false,
            lightNavbar: themes.light.secondary,
            darkNavbar: themes.dark.secondary
            // darkNavbar: {
            //     backgroundColor: themes.dark.secondary
            // }
        }
    },
    computed: {
        ...mapState(["darkTheme"]),

        // getter and setter (latter fixes no setter issue)
        theme: {
            get() {
                return this.darkTheme
            },
            set(value) {
                return value
            }
        }
    },
    methods: {
        scroll(id) {
            scrollToID(id)
        },
        ...mapMutations(["toggleTheme"])
    },
    mounted() {
        // console.log(this.themes.light.secondary);
    }
};
</script>

<style>
.navbar {
    padding-top: 1.0rem;
    padding-bottom: 1.0rem;

    /* background-color: #195bdb; */

    z-index: 99;
}

@media (min-width: 800px) {
    .navbar {
        position: sticky !important;
        top: 0 !important;
    }
}

@media (max-width: 800px) {
    .navbar {
        padding-top: 1.5rem;
    }
}

.navlink {
    color: white !important;

    font-size: 1.4rem;
    font-family: "Source Sans Pro", sans-serif;
    font-style: italic;
    font-weight: 600;
}

.navlink:hover {
    color: #faf33e !important;
    text-decoration: none;
}

/* @media (max-width: 800px) {
    .brandColumn {
        display: none;
    }
} */

/* Navbar */

/* .lightNavbar {
    background-color: #195BDB;
}

.darkNavbar {

} */
</style>
