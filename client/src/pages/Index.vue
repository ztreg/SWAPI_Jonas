<template>
  <q-page class="flex flex-center">
    <FetchCharacters></FetchCharacters>
  </q-page>
</template>

<script>
import FetchCharacters from '../components/FetchCharacters'
export default {
  name: 'PageIndex',
  components: {
    FetchCharacters
  }
}
</script>
