<template>
<!-- :style=" darkTheme ? { backgroundColor: darkBg } : { backgroundColor: lightBg } " -->
    <div
        class="contactBox container-sm rounded-xl d-flex justify-content-center"
    >
        <div class="" style="max-width: 100%;">

            <p class="contactBox--labelMain text-center"
                :style="darkTheme ? { color: darkText } : { color: lightText }"
            >
                Have a <span class="contactBox--labelMain--color">project</span> or <span class="contactBox--labelMain--color">website</span> in mind?
            </p>
            
            <p class="contactBox--label mb-10 text-center"
                :style="darkTheme ? { color: darkText } : { color: lightText }"
            >
                Then leave me a message:
            </p>

            <v-form
                class="contact-form"
                name="contact-form"
                lazy-validation
                @submit="contactFormSubmit"
            >
            
            <!-- csrf -->
            <input type="hidden" name="_token" :value="csrf" />

                <v-text-field
                    v-model="name"
                    class="contactBox--input" 
                    placeholder="Name"
                    :counter="25"
                    maxlength="25"
                    filled
                    no-resize
                    type="name"
                    :dark="darkTheme"
                    required
                >
                </v-text-field>
                <v-text-field
                    v-model="email"
                    class="contactBox--input" 
                    placeholder="Email" 
                    :counter="40"
                    maxlength="40"
                    filled
                    no-resize
                    type="email"
                    :dark="darkTheme"
                    required
                >
                </v-text-field>

                <v-textarea
                    v-model="message"
                    class="contactBox--textarea" 
                    placeholder="Message" 
                    :counter="144"
                    maxlength="144"
                    filled
                    no-resize
                    type="message"
                    :dark="darkTheme"
                    required
                >
                </v-textarea>
                <div style="max-width: 25rem;">
                    <v-hover v-slot="{ hover }">
                        <v-btn
                            :color="darkTheme ? darkBtnBg : lightBtnBg"
                            :disabled="!canSubmit"
                            :loading="isLoading"
                            type="submit"
                            rounded
                            elevation="0"
                            :dark="darkTheme"
                            style="color: white; text-transform: none;"
                        >
                            Send
                            <v-icon class="mx-2 sendMessageIcon"
                                :style="hover ? { transform: 'translateX(' + '1rem' + ')' } : ''"
                            >
                                mdi-send
                            </v-icon>
                        </v-btn>
                    </v-hover>
                </div>
            </v-form>

            <Alert
                v-if="showSuccessAlert"
                color="green darken-1"
                message="Your message has been sent!"
            />

            <Alert
                v-if="showErrorAlert"
                color="red lighten-1"
                message="Failed to send your message!"
            />

        </div>
    </div>
</template>

<script>
import themes from "../themes";
import { mapState } from 'vuex';

import Alert from "../components/Alert.vue";
export default {
    components: { Alert },
    data() {
        return {
            lightBg: themes.light.placeholder,
            darkBg: themes.dark.placeholder,

            lightText: themes.light.text,
            darkText: themes.dark.text,

            lightBtnBg: themes.light.secondary,
            darkBtnBg: themes.dark.secondary,

            name: '',
            email: '',
            message: '',
            isLoading: false,
            canSubmit: false,
            showSuccessAlert: false,
            showErrorAlert: false,
        }
    },
    methods: {
        contactFormSubmit(e) {
            this.isLoading = true
            e.preventDefault();
            axios.post("/contact/send", {
                name: this.name,
                email: this.email,
                message: this.message
            })
            .then(response => {
                if(response.status == 200) {
                    this.showSuccessAlert = true

                    setTimeout(() => {
                        this.showSuccessAlert = false
                    }, 3100);
                }
            })
            .catch(error => {
                this.showErrorAlert = true

                setTimeout(() => {
                    this.showErrorAlert = false
                }, 3100);
            })
            .finally(() => {
                this.isLoading = false;
                this.name="";
                this.email="";
                this.message="";
            });
        }
    },
    updated() {
        if(this.name == "" || this.email == "" || this.message == "") {
            this.canSubmit = false;
        }
        if(this.name != "" && this.email != "" && this.message != "") {
            this.canSubmit = true;
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

.contactBox--labelMain {
    font-size: 1.5rem;
    font-family: "Source Sans Pro", sans-serif;
}

.contactBox--labelMain--color {
    color: limegreen;
}

.contactBox--label {
    font-size: 1.2rem;
    font-family: "Source Sans Pro", sans-serif;
}

.contactBox--input {
    width: 25rem;
}

.contactBox--textarea {
    width: 30rem;
}

.contactLinks:hover {
    text-decoration: none;
}
</style>
