<template>
  <div class="p-4 flex flex-col space-y-4">
    <character-details />
    <character-comics />
    <character-series />
  </div>
</template>

<script setup lang="ts">

import CharacterDetails from '~/components/CharacterDetails.vue'
import CharacterComics from '~/components/CharacterComics.vue'
import CharacterSeries from '~/components/CharacterSeries.vue'
</script>
