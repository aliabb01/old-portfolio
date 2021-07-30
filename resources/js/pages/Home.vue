<template>
<!-- home-main -->
    <main>
        <div>
            <vue-particles
                color="#1E90FF"
                :particleOpacity="1"
                :particlesNumber="15"
                shapeType="circle"
                :particleSize="4"
                linesColor="#1E90FF"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="2"
                :hoverEffect="true"
                hoverMode="repulse"
                :clickEffect="true"
                clickMode="repulse"
            >
            </vue-particles>

            <v-row class="" style="height: 100%;">
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

        <div class="">
            <Tech />
        </div>
              
    </main>
</template>

<script>
import IntroFirst from '../components/IntroFirst.vue';
import IntroSecond from '../components/IntroSecond.vue';
import Portfolio from '../components/Portfolio.vue';
import Tech from '../components/Tech.vue';

import themes from '../themes';
import { mapState } from 'vuex';

export default {
    components: { IntroFirst, IntroSecond, Portfolio, Tech },
    data() {
        return {
            lightFirst: themes.light.primary,
            darkFirst: themes.dark.primary,
            ligthSecond: themes.light.secondary,
            darkSecond: themes.dark.secondary,
        }
    },
    computed: {
        ...mapState(["darkTheme"]),
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

.div1 {
    z-index: 5;
}

.div2 {
    border-bottom-left-radius: 100px;
    z-index: 3;
}

#particles-js {
    position : absolute;
    width:50%;
    height:89vh;
    z-index: 4;
}
</style>