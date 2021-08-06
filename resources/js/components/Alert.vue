<template>
    <v-snackbar
        v-model="alert"
        :timeout="6000"
        :color="color"
    >
        {{ message }}
        <template v-slot:action="{ attrs }">
            <v-btn
                color="black"
                text
                v-bind="attrs"
                @click="alert = false"
            >
                <v-icon
                    size="20"
                >
                    mdi-close
                </v-icon>
            </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {
    props: ["color", "message"],
    data() {
        return {
            alert: true,
        }
    }
}
</script>

<style>

</style>