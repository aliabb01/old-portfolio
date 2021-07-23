<template>
    <div class="mt-7">
        <i class="mx-2"
            :style="dark ? { color: darkText } : { color: lightText }"
        >
            <b>Technologies used :</b>
        </i>
        <v-chip-group>
            <v-chip
                v-for="(item, i) in tags"
                :key="i"
                :ripple="false"
                class="mx-2"
                :color="dark ? darkTag : lightTag"
                :text-color="dark ? darkText : lightText"
            >
                <span> {{ item }}</span>
            </v-chip>
        </v-chip-group>
    </div>
</template>

<script>
export default {
    props: ["tags", "dark", "lightText", "darkText", "lightTag", "darkTag"],
};
</script>

<style>
</style>
