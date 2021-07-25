<template>
    <div class="">        
        <v-card
            style="border: none !important; position: relative;"
        >
            <!-- <v-chip 
                v-if="inDevelopment"
                style="position: absolute; z-index: 3; top: -1.2rem; left: -1.4rem;"
                color="success"
            >
                In Development
            </v-chip> -->
            
            <v-hover v-slot="{ hover }">

                <div>

                    <ChipInDevelopment 
                        :inDevelopment="inDevelopment"
                        color="success"
                        text="In Development"
                        :hover="hover"
                    />

                    <!-- 22rem -->
                    <v-img
                        height="22rem"
                        :src="img"
                    >
                        <!-- v-if="portfolioLoading" -->
                        <template v-slot:placeholder>
                            <v-skeleton-loader
                                :loading="true"
                                class="mx-auto"
                                type="card"
                                style=""
                            ></v-skeleton-loader>
                        </template>
                        
                        <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out v-card--reveal"
                                style="height: 100%; z-index: 0"
                                :style="dark ? { backgroundColor: '#195BDB70' } : { backgroundColor: '#61DBFB75' }"
                            >                            
                                <div 
                                    class="portfolio-hover-box"
                                    :style="dark ? { backgroundColor: darkBg } : { backgroundColor: lightBg }"
                                >

                                    <div 
                                        class="portfolio-hover-box-2"
                                        :style="dark ? { backgroundColor: darkBg2 } : { backgroundColor: lightBg2 }"
                                    >

                                    </div>

                                    <!-- Category -->
                                    <span class="portfolio-hover-box--description mx-2 mt-1"
                                        :style="dark ? { color: 'lime' } : { color: 'forestgreen' }"
                                    >
                                        {{ category }}
                                    </span>

                                    <span 
                                        class="portfolio-hover-box--title mx-2"
                                        :style="dark ? { color: darkText } : { color: lightText }"
                                    >
                                        {{ title }}
                                    </span>

                                    <span class="portfolio-hover-box--description mx-2 mt-1">{{ description }}</span>

                                    

                                    <v-chip-group class="mt-4">
                                        <v-chip
                                            v-for="(item, i) in tags"
                                            :key="i"
                                            small
                                            :ripple="false"
                                            :color="dark ? darkTag : lightTag"
                                            :text-color="dark ? darkText : lightText"
                                        >
                                            {{ item }}
                                        </v-chip>
                                    </v-chip-group>
                                    
                                    <v-hover v-slot="{ hover }">
                                        <v-btn
                                            :ripple="false"
                                            icon
                                            elevation="0"
                                            style="position: absolute; bottom: 1%; right: 5%; text-decoration: none; transition: all 0.3s"
                                            :style="hover ? { transform: 'translateX(' + 7 + 'px)' } : ''"
                                            :to="{ name: 'portfolioPage', params: { id: index } }"
                                        >
                                            <v-icon
                                                :color="dark ? (hover ? darkBg2 : darkText) : (hover ? lightBg2 : lightText)"
                                            >
                                                <!-- mdi-dots-horizontal -->
                                                mdi-arrow-right
                                            </v-icon>
                                        </v-btn>
                                    </v-hover>

                                </div>                            
                            </div>
                        </v-expand-transition>
                    </v-img>
                </div>
                
            </v-hover>

            
            <!-- {{ title }} -->
           
        </v-card>
    </div>
</template>

<script>
import themes from '../themes';
import ChipInDevelopment from './ChipInDevelopment';

export default {
    props: ["img", "title", "description", "category", "tags", "inDevelopment", "index", "dark", "lightText", "darkText"],
    components: { ChipInDevelopment },
    data() {
        return {
            portfolioLoading: true,

            lightBg: themes.light.placeholder,
            darkBg: themes.dark.placeholder,

            lightBg2: themes.light.secondary,
            darkBg2: themes.dark.secondary,

            lightTag: themes.light.tag,
            darkTag: themes.dark.tag
        }
    },
    mounted() {
        const readyHandler = () => {
            if(document.readyState == 'complete') {
                this.portfolioLoading = false;
                document.removeEventListener('readystatechange', readyHandler);
            }
        }

        document.addEventListener('readystatechange', readyHandler);
        
        readyHandler();
        // console.log(window)
    }
}
</script>

<style>
.v-card--reveal {
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    /* background-color: #61DBFB75;     */
    width: 100%;
}

.portfolio-hover-box-2 {
    border-radius: 5px;
    height: 10rem;
    width: 18rem;

    position: absolute;
    z-index: -1;
    bottom: -12px;
    right: -12px;
}

.portfolio-hover-box {
    height: 10rem;
    width: 18rem;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    position: relative;
}

.portfolio-hover-box--title {
    font-size: 1.4rem;
    font-weight: lighter;
    font-family: "Source Sans Pro", sans-serif;
}

.portfolio-hover-box--description {
    color: rgb(140, 140, 140);
    font-size: 0.95rem;
    font-family: "Source Sans Pro", sans-serif;
}

.portfolio-hover-box--btn {
    position: absolute;
}
</style>

<style scoped>
.v-btn::before {
  background-color: transparent !important;
}
</style>