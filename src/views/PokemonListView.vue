<template>
  <div>
    <PokemonList :typeId="String($route.params.id)" />
  </div>
</template>

<script setup lang="ts">
import PokemonList from "../components/PokemonList.vue";
</script>

<style scoped></style>
