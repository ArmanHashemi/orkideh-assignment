<template>
  <div v-if="isOpen" class="backdrop-blur-sm bg-white/30 fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded shadow-lg w-full max-w-xl">
      <button class="float-right" @click="closeDialog">
        X
      </button>
      <h2 class="text-xl mb-4">
        Search Marvel Characters
      </h2>
      <input v-model="query" class="border rounded p-2 w-full" placeholder="Search by name" @input="debounceSearch">
      <div class="h-[300px] w-full overflow-auto">
        <ul v-if="results.length">
          <li v-for="character in results" :key="character.id" class="cursor-pointer hover:bg-blue-200 p-1 rounded-xl">
            {{ character.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { MarvelCharacter } from '~/services/model/characters'
import { searchCharacterByName } from '~/services/apis/apis'
import { debounce } from '~/utils/debounce'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  close: {
    type: Function,
    required: true
  }
})
const query = ref<string>('')
const results = ref<MarvelCharacter[]>([])

const debounceSearch = debounce(async () => {
  if (query.value) {
    results.value = await searchCharacterByName(query.value)
  }
}, 1000) // delay of 500ms

watch(query, () => {
  debounceSearch()
})

const closeDialog = () => {
  props.close()
}

</script>
