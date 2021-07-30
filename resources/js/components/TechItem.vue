<template>
    
    <v-hover v-slot="{ hover }">
        <div class="col-4 d-flex flex-column justify-content-center align-items-center techBox rounded-lg"
            :style="'background-color:' + (darkTheme ? (hover ? darkHover : '') : (hover ? lightHover : ''))"
        >
            <v-img 
                :src="imgSrc"
                max-width="5rem"
                :style="hover ? '' : { filter: 'contrast(60%)' }"
                
            >
            </v-img>

            <span 
                class="techItemTitle"
                :style="darkTheme ? { color: darkText } : { lightText }"
            >
                {{ title }}
            </span>
        </div>
    </v-hover>
</template>

<script>
import themes from '../themes';
import { mapState } from 'vuex';

export default {
    props: ["imgSrc", "title"],
    data() {
        return {
            lightHover: '#61DBFB75',
            darkHover: themes.dark.tag,

            lightText: themes.light.text,
            darkText: themes.dark.text
        }
    },
    computed: {
        ...mapState(["darkTheme"]),
    },
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