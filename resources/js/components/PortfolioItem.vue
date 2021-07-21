<template>
    <div class="">        
        <v-card
            style="border: none !important;"
        >
            <v-hover v-slot="{ hover }">
                <v-img                    
                    height="22rem"
                    :src="img"                  
                >
                    <v-skeleton-loader
                        :loading="true"
                        class="mx-auto"
                        type="card"
                        style=""
                        v-if="portfolioLoading"
                    ></v-skeleton-loader>
                    <v-expand-transition>
                        <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out v-card--reveal"
                            style="height: 100%;"
                        >                            
                            <div class="portfolio-hover-box">

                                <div class="portfolio-hover-box-2">

                                </div>
                                <span class="portfolio-hover-box--title mx-2">{{ title }}</span>

                                <span class="portfolio-hover-box--description mx-2 mt-1">{{ description }}</span>

                                <v-chip-group class="mt-4">
                                    <v-chip
                                        v-for="(item, i) in tags"
                                        :key="i"
                                        small
                                        :ripple="false"
                                    >
                                        {{ item }}
                                    </v-chip>
                                </v-chip-group>

                                <v-btn
                                    icon
                                    elevation="0"
                                    
                                    style="position: absolute; bottom: 1%; right: 5%;"
                                >
                                    <v-icon>
                                        mdi-dots-horizontal
                                    </v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </v-expand-transition>
                </v-img>
                
            </v-hover>

            
            <!-- {{ title }} -->
           
        </v-card>
    </div>
</template>

<script>
export default {
    props: ["img", "title", "description", "tags", "loading", "index"],
    data() {
        return {
            portfolioLoading: true
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
    }
}
</script>

<style>
.v-card--reveal {
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    background-color: #61DBFB75;    
    width: 100%;
}

.portfolio-hover-box-2 {
    background-color: #0080ff;
    border-radius: 5px;
    height: 10rem;
    width: 18rem;

    position: absolute;
    z-index: -1;
    bottom: -15px;
    right: -15px;
}

.portfolio-hover-box {
    height: 10rem;
    width: 18rem;

    background-color: rgb(240, 240, 240);
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
    color: rgb(136, 136, 136);
    font-size: 0.95rem;
    font-family: "Source Sans Pro", sans-serif;
}

.portfolio-hover-box--btn {
    position: absolute;
}
</style>