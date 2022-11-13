<script setup lang="ts">
import { RouterView } from "vue-router";
import MenuAbilities from "./components/MenuAbilities.vue";
</script>

<template>
  <header></header>
  <div class="p-4 lg:flex lg:gap-5">
    <aside class="lg:w-60">
      <MenuAbilities />
    </aside>

    <main class="mt-8 lg:mt-0 lg:flex-grow lg:p-8">
      <RouterView :key="$route.path" />
    </main>
  </div>
</template>

<style scoped></style>
