<template>
  <div class="p-4 flex flex-col space-y-4">
    <character-details />
    <character-comics />
  </div>
</template>

<script setup lang="ts">

import CharacterDetails from '~/components/CharacterDetails.vue'
import CharacterComics from '~/components/CharacterComics.vue'
</script>
