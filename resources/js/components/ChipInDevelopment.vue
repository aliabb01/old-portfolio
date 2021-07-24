<template>
    <v-chip
        v-if="inDevelopment"
        style="position: absolute; z-index: 3; top: -1.2rem; left: -1.4rem;"
        :color="color"
    >
        {{ text }}
    </v-chip>
</template>

<script>
export default {
    props: ["inDevelopment", "color", "text"]
};
</script>

<style></style>
