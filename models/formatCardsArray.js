/* Created this script to handle formatting the nested array we recieve from the cards function in board controller */

//Thif function iterates through a 2 dimensional array and pushes the parameter into an empty array
//Params 
//arr - a  2 dimensional array from the board controller
function createNewObj(arr) {

    let cardsArray = []
    if (cardsArray.length === 0) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          cardsArray.push(arr[i][j])
        }
      }
    }
    return cardsArray
  }
  
  
  module.exports = {
    createNewObj
  }
  