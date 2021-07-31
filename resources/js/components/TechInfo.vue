<template>
    <div class="techFirst--main">
        

        <div 
            class="container"
            style="min-height: 20rem"
            :style="darkTheme ? { color: darkNameLabel } : { color: lightNameLabel }"
            id="techInfoContainer"
        >
            <span class="techName">{{ techData[selectedTech].name }}</span>
            <span>{{ techData[selectedTech].shortDescription }}</span>
            <p class="techDescription">{{ techData[selectedTech].description }}</p>

            <p>{{ techData[selectedTech].experience }}</p>
        </div>

    </div>
</template>

<script>
import themes from '../themes';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            lightBg: themes.light.placeholder,
            darkBg: themes.dark.placeholder,

            lightNameLabel: themes.light.text,
            darkNameLabel: themes.dark.text,
        }
    },
    computed: {
        ...mapState(["darkTheme", "selectedTech", "techData"]),
    },
}
</script>

<style>
.techFirst--main {
    font-family: 'Source Sans Pro', sans-serif;
}

.techName {
    font-size: 1.8rem;
    font-weight: 600;
}

.techDescription {
    font-size: 1.1rem;
}
</style>