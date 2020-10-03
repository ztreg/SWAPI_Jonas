<template>
  <q-page class="q-pa-xl">
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
        <template v-if="i < limit">
          <td>{{character.firstname}}</td>
          <td>{{character.lastname}}</td>
          <q-btn-dropdown class="glossy" color="green" label="more info...">
            <div class="q-pa-md">
              <q-separator vertical inset class="q-mx-lg" />
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
        </template>
      </tr>
    </table>
    <q-btn v-if="page > 1" @click="switchPage(page--)">Previous</q-btn>
    Page {{ page }} / {{ maxpage }}
    <q-btn v-if="page < maxpage" @click="switchPage(page++)">Next</q-btn> 
  </q-page>
</template>

<script>
/**
 * Set up 3 arrays to save data in instead of multiple requests to api
 */
export default {
  name: 'FetchCharacters2',
  data () {
    return {
      searchtext: '',
      filter: '',
      searchedCharacters: [],
      currentArray: [],
      characters: [],
      page: 1,
      maxpage: 0,
      limit: 5
    }
  },
  mounted () {
    this.fetchCharacters()
  },
  methods: {
    async fetchCharacters () {
      await fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data.results.length; i++) {
            console.log(data.results[i]);
            const fullname = data.results[i].name.split(' ')
            const replacedName = data.results[i].name.replace(' ', '-')
            const dataToAdd = {
              firstname: fullname[0],
              lastname: fullname[1] || 'Unknown',
              charData: {
                birthYear: data.results[i].birth_year,
                eyeColor: data.results[i].eye_color,
                hairColor: data.results[i].hair_color,
                height: data.results[i].height
              }
            }
            this.characters.push(dataToAdd)
          }
          this.currentArray = this.characters
          if(this.currentArray.length > 0) {
            this.maxpage = this.currentArray.length / this.limit
          }
        })
    },
    switchPage () {
      console.log(this.page);
      let startPoint
      if(this.page > 1) {
        startPoint = (this.page -1) * this.limit
      } else {
        startPoint = (this.page -1) * this.limit
      }
      let testArray = this.currentArray
      for(let i = startPoint; i < this.characters.length; i++) {
       
        testArray[i].firstname = this.currentArray[i].firstname
        testArray[i].lastname = this.currentArray[i].lastname

        console.log(this.currentArray[i].firstname);
      }
      console.log(testArray);
    }
  },
  /**
   * Watch for changes in search field, get matched characters and switch list
   */
  watch: {
    filter: function(val) {
      // if nothings is typed, switch to default
      if(val.length > 0) {
        this.searchedCharacters = []
      for(let i = 0; i < this.characters.length; i++) {
        let name = this.characters[i].firstname.toLowerCase()
        if(name.includes(val)) {
          let found = {
            firstname : this.characters[i].firstname,
            lastname: this.characters[i].lastname,
            charData: {
              birthYear: this.characters[i].birthYear,
              eyeColor: this.characters[i].eyeColor,
              hairColor: this.characters[i].hairColor,
              height: this.characters[i].height
            }
          }
          this.searchedCharacters.push(found)
        }
      }
      this.currentArray = this.searchedCharacters
      }
      else {
        this.currentArray = this.characters
      }
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

