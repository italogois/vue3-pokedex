<template>
  <div>
    <div
      v-for="pokemon in allPokemons"
      :key="pokemon.pokemon.url"
      class="rounded shadow-md odd:bg-backgroundPokemonItem"
    >
      <PokemonListItem :url="pokemon.pokemon.url" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import PokemonService from "../infra/pokemon/pokemonService";
import PokemonListItem from "./PokemonListItem.vue";

const props = defineProps({
  typeId: String,
});
const pokemonService = new PokemonService();
const allPokemons = ref();

async function getPokemons(): Promise<void> {
  const data = await pokemonService.getTypeDetails(props.typeId!);
  allPokemons.value = data.pokemon;
}

onMounted(() => {
  getPokemons();
});
</script>

<style scoped></style>
