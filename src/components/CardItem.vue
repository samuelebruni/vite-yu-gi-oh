<script>
export default {
    name: 'CardItem',
    props: {
        card: Object,
    }

}
</script>

<template>
    <div class=" col-xl-2 col-md-3 col-sm-6 col-12">
        <div class="card rounded-0 shadow">
            <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">
            <div class="card-body">
                <h6 class="card-title text-white text-center">{{ card.name }}</h6>
                <p class="card-text text-center fw-bold">{{ card.archetype }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>