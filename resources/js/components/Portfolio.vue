<template>
    <section class="tech-section mx-5 my-10">
        <div class="text-center my-10">
            <span class="portfolio-heading-label"
                :style="darkTheme ? {color: darkText } : { color: lightText }"
            >Portfolio</span>
        </div>

        <div class="container">

            <div class="d-flex mb-5">
                <v-btn
                    icon
                    color="#ffffff"
                    style="color: gray; background-color: white; text-transform: none;"
                    x-large
                    @click="sortMenuOpen = !sortMenuOpen"
                >
                    <v-icon>
                        mdi-sort
                    </v-icon>
                </v-btn>

                <v-scroll-x-transition>
                    <v-radio-group
                        v-if="sortMenuOpen"
                        row
                        style="font-family: 'Source Sans Pro', sans-serif;"
                        v-model="sortPortfolio"
                        mandatory
                        class="my-2 ml-5"
                    >

                        <v-radio
                            label="Default"
                            :dark="darkTheme"
                        >
                        </v-radio>

                        <v-radio
                            label="Featured"
                            :dark="darkTheme"
                        >
                        </v-radio>

                        <v-radio
                            label="In Development"
                            :dark="darkTheme"
                        >
                        </v-radio>
                    </v-radio-group>
                </v-scroll-x-transition>
            </div>

            <!-- <v-btn
                icon
            >
                <v-icon>
                    mdi-sort
                </v-icon>
            </v-btn> -->

                <v-col
                    v-for="(item, i) in resultSort"
                    :key="item.id"
                    class="my-5"
                    lg="4"
                    md="6"
                    sm="12"
                >
                    <PortfolioItem
                        :img="item.img"
                        :title="item.title"
                        :description="item.description"
                        :category="item.category"
                        :tags="item.tags"
                        :inDevelopment="item.inDevelopment"
                        :featured="item.featured"
                        :index="i"                        
                        :dark="darkTheme"
                        :lightText="lightText"
                        :darkText="darkText"
                    />
                </v-col>
            </div>
        </div>
    </section>
</template>

<script>
import themes from '../themes';
import { mapState } from 'vuex';

import PortfolioItem from './PortfolioItem.vue';
// import readyHandler from '../helpers/readyHandler.js';
export default {
    components: { PortfolioItem },
    data() {
        return {
            lightText: themes.light.text,
            darkText: themes.dark.text,
            
            sortPortfolio: 0,
            sortMenuOpen: false,
        }
    },
    computed: {
        ...mapState(["darkTheme", "portfolioData"]),

        resultSort() {
            if(this.sortPortfolio == 0) {
                return this.portfolioData.sort((x,y) => x.id - y.id)
            }
            if(this.sortPortfolio == 1) {
                return this.portfolioData.sort((x,y) => y.featured - x.featured)
            }
            if(this.sortPortfolio == 2) {
                return this.portfolioData.sort((x,y) => y.inDevelopment - x.inDevelopment)
            }
        }
    },
    
}
</script>

<style>
.tech-section {
    min-height: 25rem;
}

.portfolio-heading-label {
    font-size: 1.8rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 500;
}
</style>