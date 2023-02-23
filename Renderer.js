class RenderManager {
  constructor(apiManager) {
    this.apiManager = apiManager
  }

  renderMainUser() {
    const mainUserPicture = this.apiManager.data.mainUser.picture.large
    const mainUserFirstName = this.apiManager.data.mainUser.name.first
    const mainUserLastName = this.apiManager.data.mainUser.name.last
    const mainUserCity = this.apiManager.data.mainUser.location.city
    const mainUserState = this.apiManager.data.mainUser.location.state

    $('.user-container').html(`
      <img id=profile-pic src="${mainUserPicture}"  alt="${mainUserFirstName} ${mainUserLastName}">
      <div class="user-info">
        <h2>${mainUserFirstName} ${mainUserLastName}</h2>
        <p>${mainUserCity}, ${mainUserState}</p>
      </div>
    `)
  }

  renderFriendUsers() {
    const friendUserNames = this.apiManager.data.friendUsers.map(friendUser => {
      const friendFirstName = friendUser.name.first
      const friendLastName = friendUser.name.last
      return `${friendFirstName} ${friendLastName}`
    })

    $('.friends-container').html(friendUserNames.map((friendUserName, index) => `
      <div class="friends" id="friend ${index + 1}">
        ${friendUserName}
      </div>`
    ))
  }


  renderKanyeQuote() {
    const kanyeQuote = this.apiManager.data.kanyeQuote;
    $('.quote-container').html(`Favorite quote : <div><p><h3> "${kanyeQuote}"</h3></p></div>`)
  }

  renderPokemon() {
    const pokemonName = this.apiManager.data.pokemon.name
    const pokemonImg = this.apiManager.data.pokemon.img
    $('.pokemon-container').html(`
      <img id=pokemon-image src="${pokemonImg}" alt="${pokemonName}">
      <div class="pokemon-info">
        <h2>Favorite Pokemon : ${pokemonName}</h2>
      </div>
    `)
  }
  renderAboutMe() {

    const aboutMe = this.apiManager.data.aboutMe
    $('.meat-container').html(`<h2>About me</h2>  <div><h4> ${aboutMe} </div></h4>`)
  }



}