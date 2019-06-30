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
const ListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  numberOfCards: {
    type: Number,
    default: 0
  },
  boardObjectId: {
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
const ListCollection = mongoose.model('List', ListSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllListsByBoardId(boardId) {
  return ListCollection.find({boardObjectId: boardId})
}

function getList(listId){
  return ListCollection.findById(listId)
}

function createList(boardId,newlist){
  console.log(boardId)
  newlist.boardObjectId = boardId
  return ListCollection.create(newlist)
}
/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllListsByBoardId,
  getList,
  createList
}
