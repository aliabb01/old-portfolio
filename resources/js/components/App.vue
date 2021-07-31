<template>
    <v-app :style="darkTheme ? {backgroundColor: darkApp} : {backgroundColor: lightApp}">
        <Navbar />
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </v-app>
</template>

<script>
import themes from '../themes';
import Navbar from './Navbar.vue';
import { mapState, mapMutations } from 'vuex';
export default {
    components: { Navbar },
    data() {
        return {
            lightApp: themes.light.primary,
            darkApp: themes.dark.primary
        }
    },
    computed: {
        ...mapState(["darkTheme"])
    },
    beforeCreate() {
        this.$store.commit('initialiseStore')
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;1,600&display=swap');

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease-out;
}
</style>