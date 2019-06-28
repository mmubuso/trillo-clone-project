/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* 
 *Bring connection.js file to link to mongo
 *
 */
const mongoose = require('./connection.js')


/* 
 *Schema for our database
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

//Collection API
const AccountCollection = mongoose.model('Account', AccountSchema)

//Fetch all account items from the database
function getAllAcounts() {
  return AccountCollection.find()
}

//Fetch one specific item from the database
function getAccount(accountId){
  return AccountCollection.findById(accountId)
}


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllAcounts,
  getAccount
}
