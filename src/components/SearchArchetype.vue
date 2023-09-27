<script>
import { store } from '../store'

export default {
    name: 'SearchArchetype',

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <select class="border-0 rounded-2 p-1 shadow" name="archetype" id="archetype" @change="$emit('searching')"
        :v-model="store.nameArchetype">
        <option placeholder="Seleziona un archetipo.." disabled>Seleziona un archetipo..</option>
        <option v-for="archetype in store.archetypeList" :value="archetype.archetype_name">{{ archetype.archetype_name
        }}
        </option>
    </select>
</template>

<style scoped></style>