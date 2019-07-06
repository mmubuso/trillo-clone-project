/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')


/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const BoardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  backgroundColor:{
    type: String,
    default: '#ebc8b2'
  },
  numberOfLists: {
    type: Number,
    default: 0
  },
  accountObjectId: {
    type: mongoose.Types.ObjectId,
    required: true
  }
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const BoardCollection = mongoose.model('Board', BoardSchema)


//Returns all boards associated with accountId
function getAllBoardsForOneAccount(accountId) {
  return BoardCollection.find({accountObjectId: accountId})
}

//Return a specific board
function getBoard(boardId){
  return BoardCollection.findById(boardId)
}

//Create a board
function createBoard(accountId,newBoard){
  newBoard.accountObjectId = accountId
  return BoardCollection.create(newBoard)
}

//Update a board  by Id
function updatedBoard(boardId,newBoard){
  return BoardCollection.findByIdAndUpdate(boardId,newBoard)
}

//Delete a board
function deleteBoard(boardId){
  return BoardCollection.findByIdAndDelete(boardId)
}

//Delete all Boards from database
function deleteAllBoards(accountId){
  return BoardCollection.deleteMany({accountObjectId: accountId})
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllBoardsForOneAccount,
  createBoard,
  getBoard,
  updatedBoard,
  deleteBoard,
  deleteAllBoards
}
