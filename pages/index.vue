<!-- components/MarvelCharacters.vue -->
<template>
  <div class="relative">
    <SearchCharacter :is-open="isDialogOpen" :close="closeDialog" />

    <div v-if="loading" class="text-center py-4">
      Loading...
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="character in characters" :key="character.id" class="p-4 border rounded shadow hover:bg-blue-200 cursor-pointer">
        <nuxt-link :to="`/characters/${character.id}`">
          <img :src="character.thumbnail.path + '.' + character.thumbnail.extension" alt="" class="w-full h-48 object-cover">
          <h2 class="text-xl mt-4">
            {{ character.name }}
          </h2>
          <p>{{ character.description || 'Description not available' }}</p>
        </nuxt-link>
      </div>
    </div>
    <div v-if="!loading" class="w-full flex mt-4 flex justify-center fixed bottom-3">
      <div class="bg-gray-100 rounded-full p-2 shadow-md">
        <button :disabled="offset === 0" class="p-2 bg-blue-500 text-white rounded mx-2" @click="loadPreviousPage">
          &larr; Previous
        </button>
        <button class="bg-red-500 text-white p-2 rounded-full" @click="openDialog">
          Search
        </button>
        <button :disabled="offset + limit >= total" class="p-2 bg-blue-500 text-white rounded mx-2" @click="loadNextPage">
          Next &rarr;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MarvelCharacter, MarvelData } from '~/services/model/characters'
import { getMarvelCharacters } from '~/services/apis/apis'
import SearchCharacter from '~/components/SearchCharacter.vue'

const loading = ref<boolean>(true)
const characters = ref<MarvelCharacter[]>([])
const limit = ref<number>(10)
const offset = ref<number>(0)
const total = ref<number>(0)

const isDialogOpen = ref<boolean>(false)
const openDialog = () => {
  isDialogOpen.value = true
}
const closeDialog = () => {
  isDialogOpen.value = false
}

const fetchData = async () => {
  loading.value = true
  const data: MarvelData = await getMarvelCharacters(offset.value, limit.value)
  characters.value = data.results
  total.value = data.total
  loading.value = false
}

const loadNextPage = () => {
  offset.value += limit.value
  fetchData()
}

const loadPreviousPage = () => {
  offset.value = Math.max(0, offset.value - limit.value)
  fetchData()
}

onMounted(fetchData)

</script>
