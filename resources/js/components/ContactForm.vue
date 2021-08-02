<template>
    <div
        class="contactBox container-sm"
        :style=" darkTheme ? { backgroundColor: darkBg } : { backgroundColor: lightBg } "
    >
        <div class="row">

        <div class="col">
            <p class="contactBox--label mb-10"
                :style="darkTheme ? { color: darkText } : { color: lightText }"
            >Leave me a message:</p>

            <v-text-field 
                class="contactBox--input" 
                placeholder="Name" 
                counter="25"
                filled
                no-resize
                type="name"
                :dark="darkTheme"
            >
            </v-text-field>

            <v-text-field 
                class="contactBox--input" 
                placeholder="Email" 
                counter="40"
                filled
                no-resize
                type="email"
                :dark="darkTheme"
            >
            </v-text-field>
            
            <!-- csrf -->
            <input type="hidden" name="_token" :value="csrf" />

            <v-textarea 
                class="contactBox--textarea" 
                placeholder="Message" 
                counter="144"
                filled
                no-resize
                type="message"
                :dark="darkTheme"
            >
            </v-textarea>
        </div>

        <div class="col">
            <v-icon
                :color="lightIconBg"
                size="3rem"
            >
                mdi-whatsapp
            </v-icon>

            <v-icon
                :color="lightIconBg"
                size="3rem"
            >
                mdi-instagram
            </v-icon>
        </div>
        
        </div>
    </div>
</template>

<script>
import themes from "../themes";
import { mapState } from 'vuex';
export default {
    data() {
        return {
            lightBg: themes.light.placeholder,
            darkBg: themes.dark.placeholder,

            lightText: themes.light.text,
            darkText: themes.dark.text,

            lightIconBg: themes.light.secondary,
            darkIconBg: themes.dark.secondary
        }
    },
    computed: {
        csrf() {
            return document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");
        },

        ...mapState(["darkTheme"]),
    },
};
</script>

<style>
.contactBox {
    /* max-width: 50rem;
    min-height: 30rem; */
    padding: 50px;
}

.contactBox--label {
    font-size: 1.2rem;
    font-family: "Source Sans Pro", sans-serif;
}

.contactBox--input {
    width: 20rem;
}

.contactBox--textarea {
    width: 25rem;
}
</style>
