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
                    <v-expand-transition>
                        <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out v-card--reveal"
                            style="height: 100%;"
                        >
                            <!-- Kuzya 🐦 -->
                            <div class="portfolio-hover-box">
                                <span class="portfolio-hover-box--title mx-2">{{ title }}</span>

                                <span class="portfolio-hover-box--description mx-2">{{ description }}</span>

                                <v-chip-group>
                                    <v-chip
                                        v-for="(item, i) in tags"
                                        :key="i"
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
    props: ["img", "title", "description", "tags"]
}
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    background-color: rgb(30, 144, 255, 0.5);
    position: absolute;
    width: 100%;
}

.portfolio-hover-box {
    height: 10rem;
    width: 18rem;

    background-color: rgb(240, 240, 240);
    border-radius: 10px;

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