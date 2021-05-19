let currentPlayer = 'X' // state

let moveCounter = 0 // state

function handleClickSquare(event) {
  console.log(event)
  // GUARD CLAUSE
  if (event.target.nodeName !== 'LI') {
    window.alert('Invalid Selection, Click a Square')
    return
  }
  if (event.target.classList.contains('taken')) {
    window.alert('Square already taken')
    return
  }
  const thingClicked = event.target
  thingClicked.classList.add('small')
  thingClicked.textContent = currentPlayer
  moveCounter++

  const header = document.querySelector('h1')
  header.textContent = `Move ${moveCounter} of Tic Tac Toe`

  console.log(moveCounter)
  if (currentPlayer === 'O') {
    currentPlayer = 'X'
  } else {
    currentPlayer = 'O'
  }
  thingClicked.classList.add('taken')
}

function main() {
  // const firstListItem = document.querySelector('li')
  // firstListItem.classList.add('small')
  // const squares = document.querySelectorAll('li')
  // squares.forEach(square => square.addEventListener('click', handleClickSquare))

  // if (document.querySelector('h1.hello-world')) {
  //   document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  // }
  const gameBoard = document.querySelector('ul')
  gameBoard.addEventListener('click', handleClickSquare)
}

document.addEventListener('DOMContentLoaded', main)
