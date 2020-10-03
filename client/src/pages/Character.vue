<template>
  <q-page class="flex flex-center">
    <fetch></fetch>
  </q-page>
</template>

<script>
import fetch from '../components/FetchCharacters'
export default {
  name: 'Character',
  components: {
    fetch
  }
}
</script>
