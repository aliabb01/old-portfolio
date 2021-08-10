<template>
    <div style="" class="d-flex flex-column justify-content-center">
        <span class="description2">I am  
            <vue-typer
                :text='["a full stack web developer","a programmer"]'
                :repeat='Infinity'
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='2000'
                :type-delay='70'
                :pre-erase-delay='3000'
                :erase-delay='70'
                erase-style='backspace'
                :erase-on-complete='false'
                caret-animation='smooth'
            >
            </vue-typer> 
        </span>

        <div class="d-flex justify-content-center">
            <v-img
                src="/images/web_developer.svg"
                max-width="45rem"
            >
            </v-img>
        </div>
    </div>
</template>

<script>
import { VueTyper } from 'vue-typer';
export default {
    components: { VueTyper }
}
</script>

<style>
.description2 {
    color: white;

    font-size: 2rem;
    font-family: 'Source Sans Pro', sans-serif;
}

.vue-typer .custom.char.typed {
  color: #00ff40;
}

.vue-typer .custom.caret {
  width: 8px;
  background-color: #ffffff;
}

.caret {
    margin-left: 5px;
}

</style>