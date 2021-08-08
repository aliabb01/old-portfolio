<template>
    <div>
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

</style>