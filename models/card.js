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
const CardSchema = new mongoose.Schema({
 description: {
    type: String,
    required: true
  }
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const CardCollection = mongoose.model('Card', CardSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */

//Get all cards associated with a specific id
function getAllCardsByListId(listId) {
  return CardCollection.find({})
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllCardsByListId
}
