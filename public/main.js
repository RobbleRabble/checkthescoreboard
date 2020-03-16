const main = () => {
  console.log('John Maddan once said...')
}
/* Add a fnt to update team names */
/* get the query */
// get the user input
// swap values
/* Add a fnt to add 1 pt to a score */

/* Add a fnt to sub 1 pt to a socre */

const updateTeamOneName = updateName => {
  console.log('.update-team-1-name' + 'button clicked')
  const typedName = document.querySelector('.team-1-input').value
  console.log(typedName)
  updateName = typedName
  document.querySelector('.team-1-name').textContent = typedName
}

const updateTeamTwoName = updateName => {
  console.log('.update-team-2-name' + 'button clicked')
  const typedName = document.querySelector('.team-2-input').value
  console.log(typedName)
  updateName = typedName
  document.querySelector('.team-2-name').textContent = typedName
}

const addOneTeamOne = newScore => {
  console.log('.team-1-add-1-button' + 'button clicked')
  const oldScore = document.querySelector('.team-1-score')
  console.log(oldScore.textContent)
  let number = parseInt(oldScore.textContent)
  console.log(number)
  number++
  console.log(number)
  document.querySelector('.team-1-score').textContent = number
}

const takeOneTeamOne = newScore => {
  console.log('.team-1-subtract-1-button' + 'button clicked')
  const oldScore = document.querySelector('.team-1-score')
  console.log(oldScore.textContent)
  let number = parseInt(oldScore.textContent)
  console.log(number)
  number--
  console.log(number)
  document.querySelector('.team-1-score').textContent = number
}

const addOneTeamTwo = newScore => {
  console.log('.team-2-add-1-button' + 'button clicked')
  const oldScore = document.querySelector('.team-2-score')
  console.log(oldScore.textContent)
  let number = parseInt(oldScore.textContent)
  console.log(number)
  number++
  console.log(number)
  document.querySelector('.team-2-score').textContent = number
}

const takeOneTeamTwo = newScore => {
  console.log('.team-2-subtract-1-button' + 'button clicked')
  const oldScore = document.querySelector('.team-2-score')
  console.log(oldScore.textContent)
  let number = parseInt(oldScore.textContent)
  console.log(number)
  number--
  console.log(number)
  document.querySelector('.team-2-score').textContent = number
}

// const addOneTeamOne = () => {
//   updateTeamOneScore()
// }

const newTeamOneName = () => {
  updateTeamOneName()
}

const newTeamTwoName = () => {
  updateTeamTwoName()
}

const goalForOne = () => {
  addOneTeamOne()
}

const penaltyForOne = () => {
  takeOneTeamOne()
}

const goalForTwo = () => {
  addOneTeamTwo()
}

const penaltyForTwo = () => {
  takeOneTeamTwo()
}
document.addEventListener('DOMContentLoaded', main)
// event listeners
// document
//   .querySelector('.team-1-add-1-button')
//   .addEventListener('click', updateTeamOneScore)
// document
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', newTeamOneName)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', newTeamTwoName)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', goalForOne)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', penaltyForOne)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', goalForTwo)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', penaltyForTwo)
