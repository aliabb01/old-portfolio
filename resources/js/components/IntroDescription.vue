<template>
    <div>
        <p class="description-label my-4">Ali Abbasov</p>
        

        <div class="d-flex justify-content-center">
            <v-sheet
                style=""
                color="#e5e5e5"
                class="rounded-xl"                
                elevation="3"
                height="200"
                width="500"
            >
                <p class="description-text mx-15 my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore atque ipsum eius quidem ea quae</p>
            </v-sheet>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@1,600&display=swap');

.description-label {
    font-size: 46px;
    font-family: 'Source Sans Pro', sans-serif;
}

.description-text {
    font-size: 1.4rem;
    text-align: left;
}
</style>