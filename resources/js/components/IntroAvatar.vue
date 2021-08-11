<template>
    <div>
        <v-avatar
            style="border-style: solid;"
            :style="'backgroundImage: ' + (darkTheme ? darkAvatarGradient : lightAvatarGradient)"
            size="200"
            class="shadow introAvatar--border"
        >
            <v-avatar
                class="introAvatar--img"
                size="180"
                :color="darkTheme ? darkAvatar : lightAvatar"
            >
                <!-- <span>Pic</span> -->
                <v-img
                    class="selfImage"
                    src="/images/self.jpg"
                    alt="Ali Abbasov"
                    onContextMenu="return false;"
                    max-width="165"
                    max-height="165"
                >
                <template v-slot:placeholder>
                    <v-skeleton-loader
                        :loading="true"
                        class="mx-auto"
                        type="image"
                        :dark="darkTheme"
                    ></v-skeleton-loader>
                </template>
                </v-img>
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
            lightAvatar: themes.light.primary,
            darkAvatar: themes.dark.primary,
            lightAvatarCircle: themes.light.secondary,
            darkAvatarCircle: themes.dark.secondary,
            lightAvatarGradient: themes.light.secondaryGradient,
            darkAvatarGradient: themes.dark.secondaryGradient
        }
    },
    computed: {
        ...mapState(["darkTheme"])
    }
}
</script>

<style>
.introAvatar--border {
    background-origin: border-box;
    background-clip: content-box, border-box;
}

.introAvatar--img .selfImage {
    transition: all 1s;
}

.introAvatar--img:hover .selfImage {
    cursor: pointer;
    transform: rotate3d(1, 1, 1, 360deg);
    transition: all 1s;
}
</style>