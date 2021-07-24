<template>
    <div class="carouselDiv">
        <v-carousel
            cycle
            style="width: 50rem; border-radius: 30px; !important"
            class="mx-auto shadow"
            height="auto"
            hide-delimiter-background
            
        >
            <v-carousel-item
                v-for="(slideImg, i) in carouselImg"
                :key="i"
            >                
                <v-img 
                    :src="slideImg"
                    class="portfolioImageCarousel"
                    :aspect-ratio="16/9.15"
                >
                </v-img>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
    props: ['carouselImg'],
};
</script>

<style></style>
