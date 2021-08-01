<template>
    <v-chip
        v-if="featured"
        style="position: absolute; z-index: 3; top: -1.2rem; left: -1.4rem; transition: all 0.2s; color: white"
        :color="color"
        :style="hover ? [ { transform: 'rotate(' + -370 + 'deg)' }, { transition: 'all 0.2s' } ] : '' "
    >
        <span class="chipFeatured">
            {{ text }}
        </span>
    </v-chip>
</template>

<script>
export default {
    props: ["featured", "color", "text", "hover"]
};
</script>

<style>
.chipFeatured {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1.0rem;
}
</style>
