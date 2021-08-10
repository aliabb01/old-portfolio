<template>
    <v-hover v-slot="{ hover }">
        <a class="socialLink" target="blank" :title="tooltip" :href="href">
            <v-icon
                :color="darkTheme ? darkTextLabel : lightTextLabel"
                size="50"
                class="socialLink--icon"
                style="text-decoration: none;"
            >
                mdi-{{ icon }}
            </v-icon>
            <p class="socialLink--text"
                :style="'color: ' + (hover ? (darkTheme ? lightSecondary : darkSecondary) : (darkTheme ? darkTextLabel : lightTextLabel)) + ';'"
            >{{ text }}</p>
        </a>
    
    </v-hover>
</template>

<script>
import themes from '../themes';
import { mapState } from 'vuex';

export default {
    props: ["tooltip", "href", "icon", "text"],
    data() {
        return {
            lightTextLabel: themes.light.text,
            darkTextLabel: themes.dark.text,
            lightSecondary: themes.light.secondary,
            darkSecondary: themes.dark.secondary,
        }
    },
    computed: {
        ...mapState(["darkTheme"])
    }
}
</script>

<style>
.socialLink:hover {
    text-decoration: none;
}

.socialLink--text {
    font-size: 1rem;
    text-decoration: none;
}

/* .socialLink:hover .socialLink--text {
    color: blue !important;
} */
</style>