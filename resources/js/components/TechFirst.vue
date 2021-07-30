<template>
    <div>
        <div class="container">
            <span
                class="techLabel"
                :style="darkTheme ? { color: darkNameLabel } : { color: lightNameLabel }"
            >Technologies I am using</span>
        </div>

        <div class="container">
            
        </div>
    </div>
</template>

<script>
import themes from '../themes';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            lightNameLabel: themes.light.text,
            darkNameLabel: themes.dark.text,
            lightBg: themes.light.placeholder,
            darkBg: themes.dark.placeholder
        }
    },
    computed: {
        ...mapState(["darkTheme"]),
    },
}
</script>

<style>
.techLabel {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.5rem;
}
</style>