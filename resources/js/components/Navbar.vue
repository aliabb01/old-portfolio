<template>
    <div class="navbar">
        <v-row class="justify-content-around align-items-center">
            <div class="nav-link brand text-center">
                <router-link to="/" >
                    <v-avatar size="5rem" color="white">
                        <img src="/images/logo.svg" alt="John" />
                    </v-avatar>
                </router-link>
            </div>
            <div class="nav">
                <router-link to="/" class="navlink mx-2">Home</router-link>
                <router-link to="/about" class="navlink mx-2">About</router-link>
                <router-link to="/projects" class="navlink mx-2">Projects</router-link>
                <router-link to="/contact" class="navlink mx-2">Contact Me</router-link>
            </div>
            <div style="display: flex;" >
                <!-- <v-btn color="transparent" elevation="2" fab>
                    <v-icon color="#e5e5e5" size="40" >
                        mdi-moon-waning-crescent
                    </v-icon>
                </v-btn> -->
                
                <v-switch
                    inset
                    color="yellow"
                    v-model="darkMode"
                >
                </v-switch>
                <v-icon v-if="darkMode" color="yellow" size="40" >                        
                    <!-- mdi-moon-waning-crescent -->
                    <!-- mdi-lightbulb-on-outline -->
                    <!-- mdi-brightness-1 -->
                    mdi-lightbulb
                </v-icon>
                <v-icon v-if="!darkMode" color="#e5e5e5" size="40">
                    <!-- mdi-moon-waning-crescent -->
                    mdi-lightbulb
                </v-icon>
                
            </div>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            darkMode: false
        }
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@1,700&display=swap");

.navbar {
    padding-top: 1.0rem;
    padding-bottom: 1.0rem;

    background-color: #195bdb;

    z-index: 99;
}

@media (min-width: 800px) {
    .navbar {
        position: sticky !important; 
        top: 0 !important;
    }
}

.navlink {
    color: white !important;

    font-size: 1.3rem;
    font-family: "Source Sans Pro", sans-serif;
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
</style>
