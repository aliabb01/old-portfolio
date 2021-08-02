<template>
    <div
        class="contactBox container-sm rounded-xl"
        :style=" darkTheme ? { backgroundColor: darkBg } : { backgroundColor: lightBg } "
    >
        <div class="">
            <p class="contactBox--label mb-10"
                :style="darkTheme ? { color: darkText } : { color: lightText }"
            >Leave me a message:</p>

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
                            :elevation="hover ? 0 : 5"
                            :dark="darkTheme"
                            style="color: white;"
                        >
                            Send
                            <v-icon class="mx-2">
                                mdi-send
                            </v-icon>
                        </v-btn>
                    </v-hover>
                </div>
            </v-form>
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

            lightBtnBg: themes.light.secondary,
            darkBtnBg: themes.dark.secondary,

            name: '',
            email: '',
            message: '',
            isLoading: false,
            showSuccessAlert: false,
            showErrorAlert: false,
            canSubmit: false,
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

.contactLinks:hover {
    text-decoration: none;
}
</style>
