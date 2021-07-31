<template>
    <div>
        <v-avatar
            style="border-width: 7px; border-style: solid"
            :style="darkTheme ? { borderColor: darkAvatarCircle } : { borderColor: lightAvatarCircle }"
            size="200"
            class="shadow"
        >
            <v-avatar
                size="170"
                color="#C4C4C4" 
            >
                <span>Pic</span>
                <!-- <img
                    src="/images/some_image_here"
                    alt="John"
                > -->
            </v-avatar>
        </v-avatar>
    </div>
</template>

<script>
import themes from '../themes';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            lightAvatarCircle: themes.light.secondary,
            darkAvatarCircle: themes.dark.secondary
        }
    },
    computed: {
        ...mapState(["darkTheme"])
    }
}
</script>

<style>

</style>