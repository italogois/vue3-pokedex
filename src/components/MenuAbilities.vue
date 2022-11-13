<template>
  <div class="flex justify-between items-center gap-7 lg:hidden">
    <div>
      <button type="button" @click="toggleMenu()">
        <img alt="Icon to open and close menu" src="@/assets/menuicon.svg" />
      </button>
    </div>
    <RouterLink to="/">
      <img
        alt="Pokemon logo"
        class=""
        src="@/assets/pokemonlogo.png"
        width="180"
      />
    </RouterLink>
  </div>

  <div
    :class="[
      canShowMenu
        ? 'bg-backgroundApp pt-8 w-full h-screen overflow-y-auto fixed'
        : 'hidden p-7 w-60 h-screen overflow-y-auto fixed  lg:block',
    ]"
  >
    <RouterLink to="/" class="hidden lg:block" @click="toggleMenu()">
      <img
        alt="Pokemon logo"
        class="pb-7 text-center"
        src="@/assets/pokemonlogo.png"
        width="180"
      />
    </RouterLink>
    <ul>
      <li v-for="item in types" :key="item.url" class="capitalize">
        <RouterLink
          :to="{
            path: `/type/${transformUrlToId(item.url)}`,
          }"
          class="mb-5 text-lg block p-1 rounded hover:text-yellow"
          @click="toggleMenu()"
        >
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { transformUrlToId } from "../helpers/helper";
import PokemonService from "../infra/pokemon/pokemonService";

const pokemonService = new PokemonService();
const types = ref();
const canShowMenu = ref(false);

function toggleMenu(): void {
  if (screen.width < 1024) canShowMenu.value = !canShowMenu.value;
}

async function getTypes(): Promise<void> {
  const { results } = await pokemonService.getAllTypes();
  types.value = results;
}

onMounted(async () => {
  getTypes();
});
</script>

<style scoped>
@tailwind utilities;
.actived-menu {
  @apply text-yellow;
}

/* width */
::-webkit-scrollbar {
  @apply w-2;
}

/* Track */
::-webkit-scrollbar-track {
  @apply rounded-sm bg-bgScrollBar;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #4a5c6f;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #4a5c6f;
}
</style>
