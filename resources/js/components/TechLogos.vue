<template>
    <div>
        <div
            class="mx-2 row"
        >
            <TechItem
                v-for="(item, i) in techData"
                :key="i"
                :imgSrc="item.imgSrc"
                :title="item.name"
                :index="i"
            />
        </div>
        
    </div>
</template>

<script>
import { mapState } from "vuex";
import TechItem from './TechItem.vue';

export default {
    components: { TechItem },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(["techData"]),
    },
}
</script>

<style>
</style>