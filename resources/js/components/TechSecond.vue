<template>
    <div>
        <div
            class="row"
        >
            <TechItem
                v-for="(item, i) in techList"
                :key="i"
                :imgSrc="item.imgSrc"
                :title="item.title"
            />
        </div>
        
    </div>
</template>

<script>
import TechItem from './TechItem.vue';

export default {
    components: { TechItem },
    data() {
        return {
            techList: [
                {
                    imgSrc: '/images/techlogos/html.svg',
                    title: 'HTML'
                },
                {
                    imgSrc: '/images/techlogos/css.svg',
                    title: 'CSS'
                },
                {
                    imgSrc: '/images/techlogos/bootstrap.svg',
                    title: 'Bootstrap'
                },
                {
                    imgSrc: '/images/techlogos/js.svg',
                    title: 'JS'
                },
                {
                    imgSrc: '/images/techlogos/jquery.svg',
                    title: 'jQuery'
                },
                {
                    imgSrc: '/images/techlogos/laravel.svg',
                    title: 'Laravel'
                },
                {
                    imgSrc: '/images/techlogos/vue.svg',
                    title: 'Vue'
                },
                {
                    imgSrc: '/images/techlogos/react.svg',
                    title: 'React'
                },
                {
                    imgSrc: '/images/techlogos/figma.svg',
                    title: 'Figma'
                },
            ]
        }
    },
}
</script>

<style>
</style>