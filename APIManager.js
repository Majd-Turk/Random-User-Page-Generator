class APIManager {
  constructor() {
    this.data = {}
  }

  getUsers() {
    return $.get('https://randomuser.me/api/?results=7')
      .then(data => {
        let mainUser = data.results[0]
        let friendUsers = data.results.slice(1)
        this.data = { mainUser, friendUsers }
        return this.data
      })
  }

  getQuote() {
    return $.get('https://api.kanye.rest')
      .then(randomQuote => {
        const kanyeQuote = randomQuote.quote
        this.data.kanyeQuote = kanyeQuote
        return kanyeQuote
      });
  }

  getPokemon() {
    const randomId = Math.floor(Math.random() * 947) + 1;
    return $.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then(data => {
        const pokemonName = data.name
        const pokemonImg = data.sprites.front_default
        this.data.pokemon = { name: pokemonName, img: pokemonImg }
        return this.data.pokemon
      })
  }
  getMeetText() {
    return $.get('https://baconipsum.com/api/?type=meat-and-filler')
      .then(data => {
        const aboutMe = data[0]
        this.data.aboutMe = aboutMe
        return aboutMe
      })

  }

}
