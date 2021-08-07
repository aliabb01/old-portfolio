<template>
    <div style="" class="d-flex flex-column justify-content-center">

        <IntroAvatar />
        <IntroDescription />
        <IntroButton class="mt-10" />

        <br>        

        <v-divider
            :dark="darkTheme ? true : false"
        ></v-divider>
        
    </div>
</template>

<script>
import IntroAvatar from '../components/IntroAvatar.vue';
import IntroDescription from '../components/IntroDescription.vue';
import IntroButton from '../components/IntroButton.vue';
import CV from '../components/CV.vue';

import { mapState } from 'vuex';

export default {
    components: { IntroAvatar, IntroDescription, IntroButton, CV },
    computed: {
        ...mapState(["darkTheme"]),
    },
}
</script>

<style>

</style>