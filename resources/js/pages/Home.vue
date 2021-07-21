<template>
<!-- home-main -->
    <main>
        <div>
            <v-row class="" style="height: 100%">
                <v-col md="6" class="text-center div1 py-15">
                    <IntroFirst />
                </v-col>
                <!-- <div class="white-triangle"></div> -->
                <v-col md="6" class="text-center div2 py-15 shadow" 
                    :style="darkTheme ? {backgroundColor: darkSecond} : {backgroundColor: ligthSecond}"
                >
                    <IntroSecond />
                </v-col>               
            </v-row>

        </div>

        <div class="portfolio-cont my-15">
            <Portfolio />
        </div>
              
    </main>
</template>

<script>
import IntroFirst from '../components/IntroFirst.vue';
import IntroSecond from '../components/IntroSecond.vue';
import Portfolio from '../components/Portfolio.vue';

import themes from '../themes';
import { mapState } from 'vuex';

export default {
    components: { IntroFirst, IntroSecond, Portfolio },
    data() {
        return {
            lightFirst: themes.light.primary,
            darkFirst: themes.dark.primary,
            ligthSecond: themes.light.secondary,
            darkSecond: themes.dark.secondary
        }
    },
    computed: {
        ...mapState(["darkTheme"])
    },
}
</script>

<style>
.home-main {
    height: 89vh;
    width: 100%;

    position: relative;
}

.main-div {
    flex: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* .div1 {
    background-color: black;
} */

.div2 {
    border-bottom-left-radius: 100px;
}

.portfolio-cont {
    /* background-image: url('/images/portfolio_cont_bg.svg');
    background-size: cover; */
}
</style>