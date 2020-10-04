class CharacterRequests {
    static async fetchCharacters (page, filter) {
        const url = 'https://swapi.dev/api/people'
        
        try {
          return await fetch(`${url}?page=${page}&search=${filter}`)
          .then(response => response.json())
          .then(data => {
            return data
          })
        } catch (error) {
          console.log(error);
          return error
        }
    }
}

export default CharacterRequests