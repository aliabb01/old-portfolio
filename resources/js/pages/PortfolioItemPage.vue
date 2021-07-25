<template>
    <div>
        <v-container>
            <v-btn
                style="text-transform: none;"
                class="my-5"
                color="red lighten-1"
                outlined
                @click="$router.push({
                    name: 'home'
                })"
            >
                <v-icon>
                    mdi-arrow-left
                </v-icon>
                
                <span class="mx-2">Home</span>
            </v-btn>
            
            <div class="portfolio-item-page py-5 elevation-2"
                :style="darkTheme ? { backgroundColor: darkBg } : { backgroundColor: lightBg }"
            >
                <div class="my-5">                        
                    <div class="" style="position: relative;">
                        <div style="position: absolute; top: 0px; left: 0px;">
                            <v-btn
                                v-if="id!=0"
                                @click="$router.push({
                                    name: 'portfolioPage',
                                    params: {
                                        id: --id
                                    }
                                })"
                                small
                                elevation="0"
                                style="background-color: transparent"
                            >
                                <v-icon>
                                    mdi-arrow-left
                                </v-icon>
                            </v-btn>
                        </div>
                        
                        <div>
                            <h4 class="portfolio-item--title text-center"
                                :style="darkTheme ? { color: darkText } : { color: lightText }"
                            >
                                {{ portfolioData[id].title }} <span style="font-size: 50%;" v-if="portfolioData[id].inDevelopment">(In Development)</span>
                            </h4>
                        </div>
                        
                        <div style="position: absolute; top: 0px; right: 0px;">
                            <v-btn
                                v-if="id!=portfolioData.length - 1"
                                @click="$router.push({
                                    name: 'portfolioPage',
                                    params: {
                                        id: ++id
                                    }
                                })"
                                small
                                elevation="0"
                                style="background-color: transparent"
                            >
                                <v-icon>
                                    mdi-arrow-right
                                </v-icon>
                            </v-btn>
                        </div>
                    </div>
                    <p class="portfolio-item--description text-center"
                        :style="darkTheme ? { color: darkText } : { color: lightText }"
                    >
                        {{ portfolioData[id].description }}
                    </p>
                </div>
                
                <Carousel :carouselImg="portfolioData[id].carouselImg" />                

                <div class="container" style="text-align: left; max-width: 50rem">                    
                    <div>
                        <p class="portfolio-item--longDescription my-5" style="margin-bottom: 0px; font-size: 1.2rem"
                            :style="darkTheme ? { color: darkText } : { color: lightText }"
                        >
                            {{ portfolioData[id].longDescription }}
                        </p>
                    </div>

                    <Tags 
                        :tags="portfolioData[id].tags"
                        :dark="darkTheme"
                        :lightText="lightText"
                        :darkText="darkText"
                        :lightTag="lightTag"
                        :darkTag="darkTag"
                    />
                    
                </div>

                <div 
                    v-if="portfolioData[id].links.live != '' || portfolioData[id].links.github != ''"
                    class="container" 
                    style="max-width: 50rem; border-top: 1px solid gray"
                >
                    <Links
                        :linkLive="portfolioData[id].links.live"
                        :linkGithub="portfolioData[id].links.github"
                        :dark="darkTheme"
                        :lightText="lightText"
                        :darkText="darkText"
                    />                    
                </div>
            </div>

        </v-container>
    </div>
</template>

<script>
import themes from '../themes';
import { mapState } from 'vuex';

import Carousel from '../components/PortfolioItemPage/Carousel.vue';
import Links from '../components/PortfolioItemPage/Links.vue';
import Tags from '../components/PortfolioItemPage/Tags.vue';
import ChipInDevelopment from '../components/ChipInDevelopment.vue';

export default {
    components: { Carousel, Links, Tags, ChipInDevelopment },
    props: ["id"],
    data() {
        return {
            lightText: themes.light.text,
            darkText: themes.dark.text,

            lightLightText: themes.light.textLight,
            lightDarkText: themes.dark.textLight,

            lightBg: themes.light.placeholder,
            darkBg: themes.dark.placeholder,

            lightTag: themes.light.tag,
            darkTag: themes.dark.tag,
        }
    },
    computed: {
        ...mapState(["darkTheme", "portfolioData"])
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>

<style>
.portfolio-item-page {
    /* background-color: rgb(245, 245, 245); */
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

/* carousel delimiter */
#app > div > div:nth-child(2) > div > div > div.carouselDiv > div > div.v-carousel__controls > div > button {
    color: black;
}

/* active carousel delimiter */
#app > div > div:nth-child(2) > div > div > div.carouselDiv > div > div.v-carousel__controls > div > button.v-item--active {
    color: dodgerblue;
}

.links {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.9rem;
}
</style>