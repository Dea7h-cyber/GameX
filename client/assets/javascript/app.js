const gameBoard = document.querySelector('.game-board')
const dataUrlLinks = document.querySelectorAll('[data-url]')

const startGame = () => {
  fetch('http://localhost:3000/api/game')
    .then(data => data.json())
    .then(data => {
      console.log(data)
      gameBoard.innerHTML = JSON.stringify(data)
    })
}

/**
 * EventListeners
 */

dataUrlLinks.forEach(link => {
  link.addEventListener('click', e => {
    let pageName = e.target.getAttribute('data-url')
    console.log(pageName)
  })
})