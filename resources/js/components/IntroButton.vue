<template>
    <div>
        <v-hover v-slot="{ hover }">

            <!-- :color="darkTheme ? 'rgba(25, 91, 219, 0.7)' : 'rgba(30, 144, 255, 0.7)' " -->
            <v-btn                
                rounded
                large
                :elevation="hover ? 0 : 2"
                @click.native="scroll('contact-me')"
                :style="'backgroundImage: ' + (darkTheme ? darkAvatarGradient : lightAvatarGradient)"
            >
                <span class="get-in-touch d-flex align-items-center mr-2"
                    :style="darkTheme ? { color: darkTextLabel } : { color: lightTextLabel }"
                >Get In Touch
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

import scrollToID from '../helpers/scrollToID';
export default {
    data() {
        return {
            // lightBtn: themes.light.secondary,
            // darkBtn: themes.dark.secondary,
            
            lightTextLabel: themes.light.text,
            darkTextLabel: themes.dark.text,

            lightAvatarGradient: themes.light.secondaryGradient,
            darkAvatarGradient: themes.dark.secondaryGradient
        }
    },
    methods: {
        scroll(id) {
            scrollToID(id)
        },
    },
    computed: {
        ...mapState(["darkTheme"])
    }
}
</script>

<style>
.get-in-touch {
    font-size: 1.2rem;
    text-transform: none;
    font-family: 'Source Sans Pro', sans-serif;
}
</style>