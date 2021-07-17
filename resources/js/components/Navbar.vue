<template>
    <div>
        <div class="navbar">
            <v-row class="mx-5 justify-content-around align-items-center">
                <div class="nav-link brand text-center">
                    <v-avatar size="5rem" color="white">
                        <img src="/images/logo.svg" alt="John" />
                    </v-avatar>
                </div>
                <div class="">
                    <router-link to="/" class="navlink mx-4">Home</router-link>
                    <router-link to="/about" class="navlink mx-4">About</router-link>
                    <router-link to="/" class="navlink mx-4">Projects</router-link>
                    <router-link to="/" class="navlink mx-4">Contact Me</router-link>
                </div>
                <div>
                    <v-icon color="#e5e5e5" >
                        mdi-moon-waning-crescent
                    </v-icon>
                </div>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@1,700&display=swap");

.navbar {
    padding-top: 1.0rem;
    padding-bottom: 1.0rem;

    background-color: #195bdb;
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
