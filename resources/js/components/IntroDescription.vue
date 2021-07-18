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
                <p class="description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore atque ipsum eius quidem ea quae</p>
            </v-sheet>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>


.description-label {
    font-size: 2.7rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    font-style: italic;
}

.description-text {
    font-size: 1.4rem;
    font-family: 'Source Sans Pro', sans-serif;
    text-align: left;

    margin-top: 1rem;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    margin-bottom: 1rem;
}
</style>