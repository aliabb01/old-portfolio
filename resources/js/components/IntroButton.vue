<template>
    <div>
        <v-hover v-slot="{ hover }">
            <v-btn                
                rounded                  
                :color="darkTheme ? '#195BDB95' : '#1E90FF95' "  
                large
                :elevation="hover ? 0 : 2"
            >
                <span class="get-in-touch d-flex align-items-center mr-2"
                    :style="darkTheme ? { color: darkTextLabel } : { color: lightTextLabel }"
                >Get in touch                    
                </span>

                <v-icon
                    :style="darkTheme ? { color: darkTextLabel } : { color: lightTextLabel }"
                >
                    mdi-arrow-right
                </v-icon>
            </v-btn>
        </v-hover>
    </div>
</template>

<script>
import themes from '../themes';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            lightTextLabel: themes.light.text,
            darkTextLabel: themes.dark.text
        }
    },
    computed: {
        ...mapState(["darkTheme"])
    }
}
</script>

<style>
.get-in-touch {
    /* color: #1859dc; */
    /* color: white ; */
    font-size: 1rem;
    text-transform: none;
    font-family: 'Source Sans Pro', sans-serif;
}
</style>