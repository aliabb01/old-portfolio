<template>
    <section class="tech-section mx-5 my-10">
        <div class="text-center my-10">
            <span class="portfolio-heading-label">Portfolio</span>
        </div>

        <div class="container">
            <div class="row justify-content-around">
                <v-col
                    v-for="(item, i) in portfolioData"
                    :key="i"
                    class="mx-15"
                >
                    <PortfolioItem 
                        :img="item.img"
                        :title="item.title"
                        :description="item.description"
                        :tags="item.tags" 
                    />
                </v-col>
            </div>
        </div>
    </section>
</template>

<script>
import PortfolioItem from './PortfolioItem.vue';
export default {
    components: { PortfolioItem },
    data() {
        return {
            portfolioData: [
                {
                    img: 'https://picsum.photos/350',
                    title: 'Railway Reservation System',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, perspiciatis?',
                    tags: [
                        'php',
                        'laravel',
                    ]
                },
                {
                    img: 'https://picsum.photos/350',
                    title: 'MyCookingLife',
                    description: 'Lorem ipsum dolor sit amet.',
                    tags: [
                        'php',
                        'laravel',
                    ]
                },
                {
                    img: 'https://picsum.photos/350',
                    title: 'Tweety'
                }
            ]
        }
    }
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