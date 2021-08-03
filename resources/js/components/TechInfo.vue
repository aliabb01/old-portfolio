<template>
    <div class="techFirst--main">
        <div 
            class="container"
            style="min-height: 20rem"
            :style="darkTheme ? { color: darkNameLabel } : { color: lightNameLabel }"
        >
            <span class="techName">{{ techData[selectedTech].name }}</span>
            <span>{{ techData[selectedTech].shortDescription }}</span>
            <p class="techDescription">{{ techData[selectedTech].description }}</p>

            <p class="techStatName"
                style="font-weight: bold;"
                :style="darkTheme ? { color: darkSpecName } : { color: lightSpecName }"
            >
            Started:</p>

            <p>{{ techData[selectedTech].experience }} ago</p>

            <p class="techStatName"
                style="font-weight: bold;"
                :style="darkTheme ? { color: darkSpecName } : { color: lightSpecName }"
            >
            Experience:</p>

            <v-progress-linear
                rounded
                :value="techData[selectedTech].experienceLevel"
                :color="techData[selectedTech].experienceLevel >= 75 ? 'red' : (techData[selectedTech].experienceLevel > 40 ? 'yellow' : (techData[selectedTech].experienceLevel < 40 ? 'green' : ''))"
            >
            </v-progress-linear>
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

            lightSpecName: themes.light.secondary,
            darkSpecName: themes.dark.secondary
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
    font-size: 1.2rem;
}

.techStatName {
    font-size: 1rem;
}
</style>