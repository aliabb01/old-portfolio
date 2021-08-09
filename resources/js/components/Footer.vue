<template>
    <div class="footerDiv">
        <v-footer 
            padless
            :color="darkTheme ? darkBg : lightBg"
            class="text-white"
        >
            <v-col
                class="text-center"
                cols="12"
            >
                {{ new Date().getFullYear() }}. Ali Abbasov
            </v-col>
        </v-footer>
    </div>
</template>

<script>
import themes from '../themes';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            lightBg: themes.light.secondary,
            darkBg: themes.dark.secondary,
        }
    },
    computed: {
        ...mapState(["darkTheme"]),
    },
}
</script>

<style>
.footerDiv {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1.1rem;
}
</style>