<template>
  <div class="bg-gray-200 p-2 rounded-xl shadow-mx">
    <div v-if="loading" class="text-center py-4">
      Loading...
    </div>

    <div v-else>
      <div>
        <h2 class="text-xl mt-4">
          Series
        </h2>
        <ul>
          <li v-for="serie in seriesList" :key="serie.id">
            {{ serie.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getCharacterSeries } from '~/services/apis/apis'

const loading = ref<boolean>(true)
const seriesList = ref<Series[]>([])
const route = useRoute()

const fetchData = async () => {
  const characterId = parseInt(route.params.id as string)
  seriesList.value = await getCharacterSeries(characterId)
  loading.value = false
}

onMounted(fetchData)
</script>
