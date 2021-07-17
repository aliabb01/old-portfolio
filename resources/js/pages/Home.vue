<template>
<!-- home-main -->
    <main>
        <div>
            <v-row class="vh-100">
                <v-col md="6" class="text-center py-10 div1" style="">
                    <IntroFirst />
                </v-col>
                <!-- <div class="white-triangle"></div> -->
                <v-col md="6" class="text-center py-10 div2">
                    
                    <IntroSecond />
                </v-col>
            </v-row>

            <IntroAvatar />
        </div>
    </main>
</template>

<script>
import IntroFirst from '../components/IntroFirst.vue';
import IntroSecond from '../components/IntroSecond.vue';

export default {
    components: { IntroFirst, IntroSecond },
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

}

.div2 {
    background-color: #195BDB;
}

.white-triangle {
    background-color: white;
    position: absolute;
    top: 0;
    left: 45%;
    width:20px;
    height: 100%;

    border-bottom: 89vh solid #195BDB;
    border-left: 100px solid transparent;
}
</style>