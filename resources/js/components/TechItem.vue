<template>
    
    <v-hover v-slot="{ hover }">
        <div class="col-4 d-flex flex-column justify-content-center align-items-center techBox rounded-lg"
            :style="'background-color:' + (darkTheme ? (hover ? darkHover : '') : (hover ? lightHover : ''))"
            @mouseover="toggleSelected(index)"
            @click="scrollUp('techInfoContainer')"
        >
            <v-img 
                :src="imgSrc"
                max-width="5rem"
                :style="selectedTech==index ? '' : { filter: 'grayscale(100%)' }"
                contain
            >
                <template v-slot:placeholder>
                    <v-skeleton-loader
                        :loading="true"
                        class="mx-auto"
                        type="image"
                        :dark="darkTheme"
                    ></v-skeleton-loader>
                </template>
            </v-img>

            <span 
                class="techItemTitle mt-2"
                :style="darkTheme ? { color: darkText } : { lightText }"
            >
                {{ title }}
            </span>
        </div>
    </v-hover>
</template>

<script>
import themes from '../themes';
import { mapState, mapMutations } from 'vuex';

export default {
    props: ["imgSrc", "title", "index"],
    data() {
        return {
            lightHover: '#61DBFB75',
            darkHover: themes.dark.tag,

            lightText: themes.light.text,
            darkText: themes.dark.text
        }
    },
    computed: {
        ...mapState(["darkTheme", "selectedTech"]),
    },
    methods: {
        ...mapMutations(["toggleSelected"]),

        scrollUp(id) {
            document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style>
.techBox {
    cursor: pointer;
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
}

.techItemTitle {
    font-family: 'Source Sans Pro', sans-serif;
}
</style>