<template>
    <div class="py-15">
        <div class="container text-center">
            <span
                class="techLabel"
                :style="darkTheme ? { color: darkNameLabel } : { color: lightNameLabel }"
            >Technologies I have experience with</span>

            <div class="d-flex justify-content-center mt-5">
                <div
                    style="height: 0.3rem; width: 3rem; border-radius: 30px;"
                    :style="darkTheme ? { backgroundColor: darkUnderline } : { backgroundColor: lightUnderline }"
                >
                    
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-10 ">
                <TechLogos />
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 mx-2 d-flex justify-content-center align-items-center">
                <TechInfo />
            </div>
        </div>
    </div>
</template>

<script>
import themes from '../themes';
import { mapState } from 'vuex';

import TechInfo from './TechInfo.vue';
import TechLogos from './TechLogos.vue';
export default {
    components: { TechInfo, TechLogos },
    data() {
        return {
            lightNameLabel: themes.light.text,
            darkNameLabel: themes.dark.text,
            
            lightUnderline: themes.light.secondary,
            darkUnderline: themes.dark.secondary
        }
    },
    computed: {
        ...mapState(["darkTheme"]),
    },
}
</script>

<style>
.techLabel {
    font-size: 1.5rem;
    font-family: 'Source Sans Pro', sans-serif;
}
</style>