class CharacterRequests{static async fetchCharacters(e,t){const a="https://swapi.dev/api/people";try{return await fetch(`${a}?page=${e}&search=${t}`).then((e=>e.json())).then((e=>e))}catch(s){return console.log(s),s}}}export default CharacterRequests;