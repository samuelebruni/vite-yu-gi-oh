<script>
import { store } from '../store'

export default {
    name: 'SearchArchetype',


    data() {
        return {
            store,
        }
    },
    emits: ['searching'],
}
</script>

<template>
    <select class="border-0 rounded-2 p-1 shadow" v-model="store.nameArchetype" @change="$emit('searching')">
        <option value="" disabled selected>Seleziona un archetipo..</option>
        <option v-for="archetype in store.archetypeList" :value="archetype.archetype_name">{{ archetype.archetype_name
        }}
        </option>
    </select>
</template>

<style scoped></style>