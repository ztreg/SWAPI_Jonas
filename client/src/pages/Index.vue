<template>
  <q-page class="flex flex-center">
    <FetchCharacters2></FetchCharacters2>
  </q-page>
</template>

<script>
import FetchCharacters2 from '../components/FetchCharacters2'
// import FetchCharacters from '../components/FetchCharacters'
export default {
  name: 'PageIndex',
  components: {
    // FetchCharacters,
    FetchCharacters2
  }
}
</script>
