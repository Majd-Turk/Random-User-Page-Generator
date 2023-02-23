$(document).ready(() => {
  const apiManager = new APIManager()
  const renderManager = new RenderManager(apiManager)

  $('.buttons button:first-of-type').on('click', () => {
    apiManager.getUsers()
      .then(() => apiManager.getQuote())
      .then(() => apiManager.getPokemon())
      .then(() => apiManager.getMeetText())
  })

  $('.buttons button:last-of-type').on('click', () => {
    renderManager.renderMainUser()
    renderManager.renderFriendUsers()
    renderManager.renderKanyeQuote()
    renderManager.renderPokemon()
    renderManager.renderAboutMe()
  })
})