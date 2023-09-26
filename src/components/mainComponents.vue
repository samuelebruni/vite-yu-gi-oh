<script>
import { store } from '../store'

export default {
    name: 'MainComponents',
    data() {
        return {
            store
        }
    },
    created() {
        store.fetchData();
    }

}
</script>

<template>
    <section id="app_main" class="py-3">
        <div class="container">
            <select class="border-0 rounded-2 p-1 shadow">
                <option value="0">Alien</option>
                <option value="1">Monster</option>
            </select>
            <div class="container bg-white p-4 mt-3">
                <div>
                    <div class="bg-dark">
                        <div class="text-white fw-bold text-center p-2">Found 39 cards</div>
                    </div>
                    <div>
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                            <div class="col" v-for="card in store.cards">
                                <div class="card rounded-0">
                                    <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ card.name }}</h5>
                                        <p class="card-text">{{ card.archetype }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
