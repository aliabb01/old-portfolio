<template>
    <div>
        <v-hover v-slot="{ hover }">
            <v-btn                
                rounded                  
                color="#1859dc35"  
                x-large                          
            >
                <span class="intro-read-more"
                    :style="darkTheme ? { color: darkTextLabel } : { color: lightTextLabel }"
                >Read more ...
                    <v-icon>
                        
                    </v-icon>
                </span>
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
.intro-read-more {
    /* color: #1859dc; */
    /* color: white ; */
    font-size: 1rem;
    font-weight: 700;
    font-style: italic;
    text-transform: none;
}
</style>