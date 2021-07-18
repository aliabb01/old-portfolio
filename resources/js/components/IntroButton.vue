<template>
    <div>
        <v-hover v-slot="{ hover }">
            <v-btn                
                rounded                  
                color="#1859dc20"  
                x-large                          
            >
                <span class="intro-read-more">Read more ...
                    <v-icon>
                        
                    </v-icon>
                </span>
            </v-btn>
        </v-hover>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.intro-read-more {
    color: #1859dc;
    /* color: white ; */
    font-size: 1rem;
    font-weight: 700;
    font-style: italic;
    text-transform: none;
}
</style>