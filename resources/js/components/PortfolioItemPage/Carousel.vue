<template>
    <div class="carouselDiv">
        <v-carousel
            cycle
            style="width: 50rem; border-radius: 30px; !important"
            class="mx-auto"
        >
            <v-carousel-item
                v-for="(slideImg, i) in carouselImg"
                :key="i"
            >
                <v-sheet height="110%">
                    <v-row class="fill-height">
                        <v-img :src="slideImg" class="portfolioImageCarousel">
                        </v-img>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
    props: ['carouselImg']
};
</script>

<style></style>
