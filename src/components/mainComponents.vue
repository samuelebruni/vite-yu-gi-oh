<script>
import { store } from '../store'
import SearchArchetype from './SearchArchetype.vue';
import CardItem from './CardItem.vue';

export default {
    name: 'MainComponents',
    components: {
        SearchArchetype,
        CardItem
    },
    data() {
        return {
            store
        }
    },
    created() {
        store.fetchData(this.store.base_url),
            store.fetchArchetype(this.store.archetype_url)
    },
    methods: {
        searchingArchetype() {
            const urlArchetype = this.store.base_url + `&archetype=${this.store.nameArchetype}`;
            this.store.fetchData(urlArchetype);
            console.log(this.store.archetypeList, urlArchetype);
        }
    },

}
</script>

<template>
    <section id="app_main" class="py-3">
        <div class="container">
            <SearchArchetype @searching="searchingArchetype" />
            <div class="container bg-white p-4 mt-3 shadow">
                <div>
                    <div class="bg-dark">
                        <div class="text-white fw-bold text-center p-2">Found 39 cards</div>
                    </div>
                    <div>
                        <div class="row">
                            <CardItem :card="card" v-for="card in store.cards" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
