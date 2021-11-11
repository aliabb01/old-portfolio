<template>
    <div class="cv-container my-5">
        <p class="cv-heading py-1"
            :style="'color: ' + (darkTheme ? darkText : lightText)"
        >
            My CV
        </p>
        <div class="row justify-content-around">
            <div class="col">
                <!-- <v-dialog
                    transition="dialog-bottom-transition"
                >
                <template v-slot:activator="{ on, attrs }">
                    
                </template>
                <template v-slot:default="dialog" style="position: relative">
                     <v-btn
                        icon
                        small
                        color="white"
                        @click="dialog.value = false"
                        style="position: relative; float: right; z-index: 3; background-color: red;"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <div class="iframe-container">
                        <iframe src="https://drive.google.com/file/d/1IzYCw5dwFEb9TOMQ4dRJKOJ5pPrP5ae9/preview" allow="autoplay"></iframe>
                    </div>
                </template>
                </v-dialog> -->
                
                <!-- View my CV -->
                <v-btn
                    icon
                    height="4rem"
                    width="4rem"
                    :color="lightBtn"
                    style="border-width: 3px; border-style: solid; text-decoration: none;"
                    :style=" { borderColor: lightBtn }"
                    target="_blank"
                    href="https://drive.google.com/file/d/1EacruxIlnCPqX-U-1a9U7fvgGpvnsnnJ/view"
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
                    height="4rem"
                    width="4rem"
                    :color="lightBtn"
                    style="border-width: 3px; border-style: solid; text-decoration: none;"
                    :style=" { borderColor: lightBtn }"
                    target="_blank"
                    href="https://drive.google.com/u/0/uc?id=1EacruxIlnCPqX-U-1a9U7fvgGpvnsnnJ&export=download"
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

.iframe-container {
    overflow: hidden;
    padding-top: 140%;
    position: relative;
}

.iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
</style>