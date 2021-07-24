<template>
    <section class="tech-section mx-5 my-10">
        <div class="text-center my-10">
            <span class="portfolio-heading-label"
                :style="darkTheme ? {color: darkText } : { color: lightText }"
            >Portfolio</span>
        </div>

        <div class="container">
            <div class="row justify-content-around">
                <v-col
                    v-for="(item, i) in portfolioData"
                    :key="i"
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
            // portfolioLoading: true,
            
        }
    },
    computed: {
        ...mapState(["darkTheme", "portfolioData"])
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