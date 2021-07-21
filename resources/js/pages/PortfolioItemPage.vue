<template>
    <div>
        <v-container>
            <v-btn
                style="text-transform: none;"
                color="red lighten-1"
                dark
                @click="$router.go(-1)"
            >
                Back
            </v-btn>

            <h4>{{ portfolioData[id].title }}</h4>
            <p>{{ portfolioData[id].description }}</p>
            
        </v-container>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    props: ["id"],
    computed: {
        ...mapState(["portfolioData"])
    },
}
</script>

<style>

</style>