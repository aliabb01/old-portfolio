<template>
<!-- home-main -->
    <main>
        <div>
            <v-row class="" style="height: 100%">
                <v-col md="6" class="text-center div1 py-15">
                    <IntroFirst />
                </v-col>
                <!-- <div class="white-triangle"></div> -->
                <v-col md="6" class="text-center div2 py-15" 
                    :style="darkTheme ? {backgroundColor: darkSecond} : {backgroundColor: ligthSecond}"
                >
                    <IntroSecond />
                </v-col>               
            </v-row>

        </div>

        <Tech />    
              
    </main>
</template>

<script>
import IntroFirst from '../components/IntroFirst.vue';
import IntroSecond from '../components/IntroSecond.vue';
import Tech from '../components/Tech.vue';

import themes from '../themes';
import { mapState } from 'vuex';

export default {
    components: { IntroFirst, IntroSecond, Tech },
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

/* .white-triangle {
    background-color: white;
    position: absolute;
    top: 0;
    left: 45%;
    width:20px;
    height: 100%;

    border-bottom: 89vh solid #195BDB;
    border-left: 100px solid transparent;
} */
</style>