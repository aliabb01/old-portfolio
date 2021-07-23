<template>
    <div v-if="linkLive!='' || linkGithub != ''" class="links row d-flex justify-content-between align-items-center">
        <div class="col" v-if="linkLive">
            <v-icon size="2em"
                :color="dark ? 'white' : 'black'"
            >
                mdi-eye-outline
            </v-icon>
            <span
                :style="dark ? { color: darkText } : { color: lightText }"
            >                
                <a :href="linkLive" target="blank"
                    :style="dark ? { color: darkText } : { color: lightText }"
                >
                Live website here
                </a>
            </span>
        </div>

        <div class="col" v-if="linkGithub">
            
            <v-icon size="2rem"
                :color="dark ? 'white' : 'black'"
            >
                mdi-github-circle
            </v-icon>

            <a :href="linkGithub" target="blank"
                :style="dark ? { color: darkText } : { color: lightText }"
            >
                GitHub repository
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ["linkLive", "linkGithub", "dark", "lightText", "darkText"]
};
</script>

<style></style>
