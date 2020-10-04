<template>
  <q-page class="q-pa-xl">
    <h3>Starwars characters</h3>
    <table class="characters">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Action</th>
      </tr>
      <q-input borderless dense debounce="300" v-model="filter" placeholder="Search characters...">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <tr v-for="(character, i) in this.currentArray" :key="i">
          <td>{{character.firstname}}</td>
          <td>{{character.lastname}}</td>
          <q-btn-dropdown class="glossy" color="green" label="more info...">
            <div class="q-pa-md">
              <q-separator vertical inset class="q-mx-lg" />
              <div class="bg-primary q-pa-md text-white text-center text-h4">{{character.firstname}}</div>
              <table class="characters">
                
                <tr>
                  <th>BirthYear</th>
                  <th>Eye color</th>
                  <th>Hair color</th>
                  <th>Height</th>
                </tr>
                <tr>
                  <td>{{character.charData.birthYear}}</td>
                  <td>{{character.charData.eyeColor}}</td>
                  <td>{{character.charData.hairColor}}</td>
                  <td>{{character.charData.height}}</td>
                </tr>
              </table>
            </div>
          </q-btn-dropdown>
      </tr>
    </table>
    <q-btn v-if="page > 1" @click="fetchCharacters(page--)">Previous</q-btn>
    Page {{ page }} / {{ maxpage }}
    <q-btn  @click="fetchCharacters(page++)">Next</q-btn> 
  </q-page>
</template>

<script>
import CharacterRequests from '../../public/Requests'
export default {
  name: 'FetchCharacters2',
  data () {
    return {
      filter: '',
      currentArray: [],
      characters: [],
      page: 1,
      maxpage: 1
    }
  },
  mounted () {
    this.fetchCharacters()
  },
  methods: {
    async fetchCharacters () {
      const response = await CharacterRequests.fetchCharacters(this.page, this.filter)
      this.filterData(response)
      },
      /**
       * Edit the data before adding to array
       * since Firstname and Lastname should be separated
       */
      filterData (response) {
        this.characters = []
        for (let i = 0; i < response.results.length; i++) {
          const fullname = response.results[i].name.split(' ')
          const replacedName = response.results[i].name.replace(' ', '-')
          const dataToAdd = {
            firstname: fullname[0],
            lastname: fullname[1] || 'Unknown',
            charData: {
              birthYear: response.results[i].birth_year,
              eyeColor: response.results[i].eye_color,
              hairColor: response.results[i].hair_color,
              height: response.results[i].height
            }
          }
          this.characters.push(dataToAdd)
        }
        this.currentArray = this.characters
        this.maxpage = response.count / 10
        this.maxpage = Math.ceil(this.maxpage)
      }
    
  },
  /**
   * Watch for changes in search field then make request
   */
  watch: {
    filter: function(val) {
      this.fetchCharacters ()
    }
  }
}
</script>

<style lang="scss">
/*
  * Copypasted CSS for a default table styling
*/
.characters {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.characters td, .characters th {
  border: 1px solid #ddd;
  padding: 8px;
}

.characters tr:nth-child(even){background-color: #f2f2f2;}

.characters tr:hover {background-color: #ddd;}

.characters th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>

