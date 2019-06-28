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
const AccountSchema = new mongoose.Schema({
 name: {
   type: String,
   required: true
  },
  username: {
    type: String,
    required: true
  },
  boardObjectId: mongoose.ObjectId,
  numberOfBoards: Number
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const AccountCollection = mongoose.model('Account', AccountSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */

function getAllAcounts() {
  return AccountCollection.find()
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllAcounts
}
