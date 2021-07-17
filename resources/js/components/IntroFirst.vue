<template>
    <div class="mx-5">
        <IntroAvatar />
        <IntroDescription />
        <IntroButton class="mt-10" />
    </div>
</template>

<script>
import IntroAvatar from '../components/IntroAvatar.vue';
import IntroDescription from '../components/IntroDescription.vue';
import IntroButton from '../components/IntroButton.vue';
export default {
    components: { IntroAvatar, IntroDescription, IntroButton },
}
</script>

<style>

</style>