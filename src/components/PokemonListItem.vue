<template>
  <div
    class="grid grid-cols-1 p-5 items-center lg:px-12 lg:py-14 mb-8 lg:grid-cols-2"
  >
    <div class="flex flex-col justify-center items-center">
      <img
        :src="pokemon?.sprites.front_default"
        :alt="pokemon?.name"
        class="w-56"
      />
      <div class="capitalize text-3xl font-bold">
        {{ pokemon?.name }}
      </div>

      <div class="flex flex-col gap-3 lg:flex-row">
        <div class="mt-4 text-center rounded shadow-lg p-5">
          <span class="text-large font-medium italic">Abilities</span>
          <ul class="flex items-center justify-center gap-4 mt-1">
            <li v-for="ability in pokemon?.abilities" :key="ability.slot">
              {{ ability.ability.name }}
            </li>
          </ul>
        </div>

        <div class="mt-4 text-center rounded shadow-lg p-5">
          <span class="text-large font-medium italic">Type</span>
          <ul class="flex items-center justify-center gap-4 mt-1">
            <li v-for="types in pokemon?.types" :key="types.slot">
              {{ types.type.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-6 lg:mt-0">
      <ul>
        <li v-for="stat in pokemon?.stats" :key="stat.base_stat">
          {{ stat.stat.name }}
          ({{ percentage(stat.base_stat) }}%)
          <div class="relative pt-1">
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellowBar w-full"
            >
              <div
                :style="{ width: percentage(stat.base_stat) + '%' }"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellowProgression h-full"
              ></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import PokemonService from "../infra/pokemon/pokemonService";

const props = defineProps({
  url: String,
});
const pokemonService = new PokemonService();
const pokemon = ref();

function percentage(value: number): number {
  return Math.round((100 * value) / 100);
}

async function getPokemon(): Promise<void> {
  const data = await pokemonService.getPokemon(props.url!);
  pokemon.value = data;
}

onMounted(() => {
  getPokemon();
});
</script>

<style scoped></style>
