<template>
  <div class="bg-gray-100 p-2 rounded-xl shadow-mx">
    <div v-if="loading" class="text-center py-4">
      Loading...
    </div>
    <div v-else>
      <div class="flex">
        <img :src="character.thumbnail.path + '.' + character.thumbnail.extension" alt="" class="w-48 h-48 object-cover">
        <div class="ml-4">
          <h1 class="text-2xl">
            {{ character.name }}
          </h1>
          <p>{{ character.description || 'Description not available' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { MarvelCharacter } from '~/services/model/characters'
import { getCharacterDetails } from '~/services/apis/apis'

const loading = ref<boolean>(true)
const character = ref<MarvelCharacter | null>(null)
const route = useRoute()

const fetchData = async () => {
  const characterId = parseInt(route.params.id as string)
  character.value = await getCharacterDetails(characterId)
  loading.value = false
}

onMounted(fetchData)

</script>
