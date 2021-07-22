<template>
    <v-app :style="darkTheme ? {backgroundColor: darkApp} : {backgroundColor: lightApp}">
        <Navbar />
        <router-view></router-view>
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
    }
}
</script>

<style>

</style>