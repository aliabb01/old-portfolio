<template>
    <div>
        <div 
            class="container-sm pt-5 rounded-xl elevation-3 socialLinksDiv"
            :style="darkTheme ? { backgroundColor: darkPlaceholder } : { backgroundColor: ligthPlaceholder }"
        >
            <span class="find-me"
                :style="darkTheme ? { color: darkTextLabel } : { color: lightTextLabel }"
            >
                Find me here :
            </span>
            
            <v-row class="mt-5">
                <v-col class="column">
                    <SocialLink 
                        tooltip="Github profile"
                        href="https://github.com/aliabb01"
                        icon="github-circle"
                        text="@aliabb01"
                    />
                </v-col>
                <v-col class="column">
                    <SocialLink 
                        tooltip="Stackoverflow profile"
                        href="https://stackoverflow.com/users/12312519/ali-abbasov?tab=profile"
                        icon="stack-overflow"
                        text="Ali Abbasov"
                    />
                </v-col>
                <v-col>
                    <SocialLink 
                        tooltip="Instagram profile"
                        href="https://www.instagram.com/aliabb01/"
                        icon="instagram"
                        text="@aliabb01"
                    />
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import themes from '../themes';
import { mapState } from 'vuex';

import SocialLink from '../components/SocialLink.vue';
export default {
    components: { SocialLink },
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
.socialLinksDiv {
    font-family: 'Source Sans Pro', sans-serif;
}

.find-me {
    font-size: 1.3rem;
}
</style>