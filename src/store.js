import { reactive } from 'vue'
import axios from '../node_modules/axios';

export const store = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
    cards: '',
    archetype_url: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    nameArchetype: '',
    archetypeList: '',
    status: false,

    fetchData(url) {
        axios
            .get(url)
            .then(response => {
                this.status = true
                this.cards = response.data.data;
            })
            .catch(error => {
                console.error(error);
            });
    },
    fetchArchetype(url) {
        axios
            .get(url)
            .then(response => {

                this.archetypeList = response.data;

            })
            .catch(error => {
                console.error(error);
            });
    }
})