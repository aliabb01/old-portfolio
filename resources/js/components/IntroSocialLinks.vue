<template>
    <div>
        <v-divider
            :dark="darkTheme ? true : false"
        ></v-divider>

        <div 
            class="container-xs mx-15 pt-5 rounded-xl elevation-3"
            :style="darkTheme ? { backgroundColor: darkPlaceholder } : { backgroundColor: ligthPlaceholder }"
        >
            <span class="find-me"
                :style="darkTheme ? { color: darkTextLabel } : { color: lightTextLabel }"
            >
                Find me here :
            </span>
            
            <v-row class="mt-5">
                <v-col>
                    <a class="socialLinks" target="blank" title="Github profile" href="https://github.com/aliabb01">
                        <v-icon
                            :color="darkTheme ? darkTextLabel : lightTextLabel"
                            size="50"                        
                        >
                            mdi-github-circle
                        </v-icon>
                    </a>
                </v-col>
                <v-col>
                    <a class="socialLinks" target="blank" title="Stackoverflow profile" href="https://stackoverflow.com/users/12312519/ali-abbasov?tab=profile">
                        <v-icon
                            :color="darkTheme ? darkTextLabel : lightTextLabel"
                            size="50"                        
                        >
                            mdi-stack-overflow
                        </v-icon>
                    </a>
                </v-col>
                <v-col>
                    <a href="https://github.com/aliabb01"></a>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import themes from '../themes';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            lightTextLabel: themes.light.text,
            darkTextLabel: themes.dark.text,
            lightIconColor: themes.light.secondary,
            darkIconColor: themes.dark.secondary,
            ligthPlaceholder: themes.light.placeholder,
            darkPlaceholder: themes.dark.placeholder
        }
    },
    computed: {
        ...mapState(["darkTheme"])
    }
}
</script>

<style>
.find-me {
    font-size: 1.3rem;
    font-family: 'Source Sans Pro', sans-serif;
}

.socialLinks:hover {
    text-decoration: none;
}
</style>