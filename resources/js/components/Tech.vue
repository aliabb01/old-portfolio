<template>
    <div class="py-15">
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-10 ">
                <TechFirst />
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 mx-2">
                <TechSecond />
            </div>
        </div>
    </div>
</template>

<script>
import TechFirst from '../components/TechFirst.vue';
import TechSecond from '../components/TechSecond.vue';
export default {
    components: { TechFirst, TechSecond }
}
</script>

<style>

</style>