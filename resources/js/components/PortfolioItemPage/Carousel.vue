<template>
    <div class="carouselDiv">
        <v-carousel
            cycle
            style="width: 50rem; border-radius: 30px; !important"
            class="mx-auto shadow"
            height="auto"
            hide-delimiter-background
            progress
            progress-color="#41A0FD"
            v-model="carouselIndex"
        >
            <v-carousel-item
                v-for="(slideImg, i) in carouselImg"
                :key="i"
            >
                <v-img 
                    :src="slideImg"
                    class="portfolioImageCarousel"
                    :aspect-ratio="16/9.15"
                    contain
                    @click="() => {imagesOpen = true; imageId=i}"
                >
                </v-img>
            </v-carousel-item>
        </v-carousel>

        <v-dialog
            v-model="imagesOpen"
        >
            <v-card>                                        
                <v-carousel
                    cycle
                    height="100vh"
                    :value="imageId"
                    hide-delimiter-background
                >                    
                    <v-carousel-item
                        v-for="(slideImg, i) in carouselImg"
                        :key="i"
                        style="position: relative"
                    >
                        <v-btn
                            style="position: absolute; top: 2px; right: 2px; z-index: 3;"
                            icon
                            @click="imagesOpen = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn> 
                    
                        <v-img 
                            :src="slideImg"
                            class="portfolioImageCarousel"
                            @click="imagesOpen = true"
                            contain
                        >
                        </v-img>
                    </v-carousel-item>
                </v-carousel>
            </v-card>

        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ['carouselImg', 'startPoint'],
    data() {
        return {
            imagesOpen: false,
            imageId: 0,
            startValue: this.startPoint,
            carouselIndex: 0,
        }
    },
    watch: {
        $route(to, from) {
            this.carouselIndex = this.startValue;
        }
    }
};
</script>

<style>
.portfolioImageCarousel:hover {
    cursor: pointer;
}
</style>
