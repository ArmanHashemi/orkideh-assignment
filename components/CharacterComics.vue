<template>
  <div class="bg-gray-100 p-2 rounded-xl shadow-mx">
    <div v-if="loading" class="text-center py-4">
      Loading...
    </div>
    <div v-else>
      <div>
        <h2 class="text-xl mt-4">
          Comics
        </h2>
        <ul>
          <li v-for="comic in comicList" :key="comic.id">
            {{ comic.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getCharacterComics } from '~/services/apis/apis'

const loading = ref<boolean>(true)
const comicList = ref<Comics[]>([])
const route = useRoute()

const fetchData = async () => {
  const characterId = parseInt(route.params.id as string)
  comicList.value = await getCharacterComics(characterId)
  loading.value = false
}

onMounted(fetchData)
</script>
