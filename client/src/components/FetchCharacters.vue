<template>
  <q-page class="q-pa-xl">
    <q-table
      title="StarwarsCharacters"
      :data="tableData"
      :columns="columns"
      row-key="name"
      color="amber"
      :filter="filter"
    >
    <template v-slot:top-right>
      <q-input borderless dense debounce="300" v-model="filter" placeholder="Search...">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
    <q-td>hm</q-td>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'FetchCharacters',
  data () {
    return {
      filter: '',
      columns: [
        {
          name: 'firstname',
          required: true,
          label: 'Firstname',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'lastname', align: 'center', label: 'Lastname', field: 'lastname', sortable: true },
        { name: 'test', align: 'right', label: 'See details', field: 'test', clickable: true }
      ],
      tableData: [
        {
          name: 'Jonas',
          lastname: 'Gertz',
          test: 'true'
        }
      ]
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
            const fullname = data.results[i].name.split(' ')
            const dataToAdd = {
              name: fullname[0],
              lastname: fullname[1] || 'Unknown'
            }
            this.tableData.push(dataToAdd)
          }
        })
    }
  }
}
</script>

<style>

</style>
