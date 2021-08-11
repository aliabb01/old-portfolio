<template>
    <div>
        <div
            class="mx-2 row"
        >
            <TechItem
                v-for="(item, i) in techData"
                :key="i"
                :imgSrc="item.imgSrc"
                :title="item.name"
                :index="i"
            />
            <p 
                class="m-auto"
                style="font-family: Source Sans Pro, sans-serif;"
                :style="'color: ' + (darkTheme ? darkText : lightText) + ';'"
            >
                And more
            </p>
        </div>
        
    </div>
</template>

<script>
import { mapState } from "vuex";
import themes from '../themes';

import TechItem from './TechItem.vue';

export default {
    components: { TechItem },
    data() {
        return {
            lightText: themes.light.text,
            darkText: themes.dark.text,
        }
    },
    computed: {
        ...mapState(["darkTheme", "techData"]),
    },
}
</script>

<style>
</style>