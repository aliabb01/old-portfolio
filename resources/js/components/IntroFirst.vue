<template>
    <div style="" class="d-flex flex-column justify-content-center">

        <IntroAvatar />
        <IntroDescription />
        <IntroButton class="mt-10" />

        <br>        

        <IntroSocialLinks />
        <v-divider
            :dark="darkTheme ? true : false"
        ></v-divider>
        
    </div>
</template>

<script>
import IntroAvatar from '../components/IntroAvatar.vue';
import IntroDescription from '../components/IntroDescription.vue';
import IntroButton from '../components/IntroButton.vue';
import IntroSocialLinks from '../components/IntroSocialLinks.vue';
export default {
    components: { IntroAvatar, IntroDescription, IntroButton, IntroSocialLinks },
}
</script>

<style>

</style>