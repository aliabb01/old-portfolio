<template>
    <div>
        <v-container>
            <v-btn
                style="text-transform: none;"
                class="my-5"
                color="red lighten-1"
                outlined
                @click="$router.go(-1)"
            >
                <v-icon>
                    mdi-arrow-left
                </v-icon>
                
                <span class="mx-2">Back</span>
            </v-btn>
            
            <div class="portfolio-item-page py-5 elevation-2">

                <div class="my-5">
                    <h4 class="portfolio-item--title text-center">{{ portfolioData[id].title }}</h4>
                    <p class="portfolio-item--description text-center">{{ portfolioData[id].description }}</p>
                </div>

                <div class="carouselDiv">
                    <v-carousel
                        cycle
                        style="width: 50rem; border-radius: 30px; !important"
                        class="mx-auto"
                    >
                        <v-carousel-item
                            v-for="(slideImg, i) in portfolioData[id].carouselImg"
                            :key="i"                            
                        >
                            <v-sheet
                                height="110%"
                            >
                                <v-row
                                    class="fill-height"
                                >

                                    <v-img
                                        :src="slideImg"
                                        class="portfolioImageCarousel"
                                    >
                                    </v-img>

                                </v-row>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </div>

                <div class="container" style="text-align: left; max-width: 50rem">
                    <div>
                        <p class="portfolio-item--longDescription my-5" style="margin-bottom: 0px; font-size: 1.2rem">
                            {{ portfolioData[id].longDescription }}
                        </p>
                    </div>
                </div>

                <div class="container " style="max-width: 50rem">
                    <div class="mt-4">
                        <i class="mx-2"><b>Related tags :</b></i>
                        <v-chip-group>
                            
                            <v-chip
                                v-for="(item, i) in portfolioData[id].tags"
                                :key="i"
                                
                                :ripple="false"
                                class="mx-2"
                            >
                                <span> {{ item }}</span>
                            </v-chip>
                        </v-chip-group>
                    </div>
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
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>

<style>
.portfolio-item-page {
    /* background-color: rgb(220, 224, 227); */
    border-radius: 50px;
}

.portfolio-item--title {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 2rem;
}

.portfolio-item--description {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
    
    color: gray;
}

.portfolio-item--longDescription {
    font-family: 'Source Sans Pro', sans-serif;
}

.portfolioImageCarousel {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

#app > div > div:nth-child(2) > div > div > div:nth-child(3) > div > div.v-carousel__controls > div > button {
    color: white;
}
</style>