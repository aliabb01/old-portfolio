<template>
    <div class="container">
        <p class="contactFormLabel text-center"
            :style="darkTheme ? { color: darkText } : { color: lightText }"
        >Contact me</p>

        <div class="d-flex justify-content-center mt-5 mb-10">
            <div
                style="height: 0.3rem; width: 3rem; border-radius: 30px;"
                :style="darkTheme ? { backgroundColor: darkUnderline } : { backgroundColor: lightUnderline }"
            >
            </div>
        </div>

        <div class="">
            <div>
                <ContactForm />
            </div>
        </div>
    </div>
</template>

<script>
import themes from "../themes";
import { mapState } from 'vuex';

import ContactForm from "./ContactForm.vue";
export default {
    components: { ContactForm },
    data() {
        return {
            lightUnderline: themes.light.secondary,
            darkUnderline: themes.dark.secondary,

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
.contactFormLabel {
    font-size: 1.8rem;
    font-family: "Source Sans Pro", sans-serif;
}
</style>