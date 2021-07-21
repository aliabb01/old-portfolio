<template>
    <div>
        <v-container>
            <v-btn
                style="text-transform: none;"
                color="red lighten-1"
                dark
                @click="$router.go(-1)"
            >
                <v-icon>
                    mdi-arrow-left
                </v-icon>
                
                <span class="mx-2">Back</span>
            </v-btn>

            <div class="portfolio-item-page d-flex flex-column justify-content-center align-items-center my-10">
                <h4>{{ portfolioData[id].title }}</h4>
                <p>{{ portfolioData[id].description }}</p>

                <div>
                    

                    <v-carousel
                        cycle
                        height="400"
                        hide-delimiter-background
                        show-arrows-on-hover
                    >
                        <v-carousel-item
                            v-for="(slideImg, i) in portfolioData[id].carouselImg"
                            :key="i"
                        >
                            <v-sheet                            
                                height="100%"
                            >
                                <v-img
                                    :src="slideImg"
                                    width="40rem"
                                >
                                </v-img>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </div>
            </div>

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