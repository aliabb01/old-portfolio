<template>
    <div class="cv-container my-5">
        <p class="cv-heading py-1"
            :style="'color: ' + (darkTheme ? darkText : lightText)"
        >
            My CV
        </p>
        <div class="row justify-content-around">
            <div class="col">
                <!-- View my CV -->
                <v-btn
                    icon
                    elevation="2"
                    height="4rem"
                    width="4rem"
                    :color="lightBtn"
                    style="border-width: 2px; border-style: solid"
                    :style=" { borderColor: lightBtn }"
                >
                    <v-icon
                        size="2rem"
                    >
                        mdi-eye-outline
                    </v-icon>
                </v-btn>
            </div>
            <div class="col">
                <v-btn
                    icon
                    elevation="2"
                    height="4rem"
                    width="4rem"
                    :color="lightBtn"
                    style="border-width: 2px; border-style: solid"
                    :style=" { borderColor: lightBtn }"
                >
                    <v-icon
                        size="2rem"
                    >
                        mdi-download
                    </v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import themes from '../themes';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            lightBtn: themes.light.secondary,
            darkBtn: themes.dark.secondary,

            lightText: themes.light.text,
            darkText: themes.dark.text
        }
    },
    computed: {
        ...mapState(["darkTheme"]),
    },
}
</script>

<style>
.cv-container {
    font-family: "Source Sans Pro", sans-serif;
}

.cv-heading {
    font-size: 1.3rem;
    font-weight: 600;
}
</style>