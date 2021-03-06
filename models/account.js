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
  numberOfBoards: {
    type: Number,
    default: 0
  },
  profilePicture:{
    type: String,
    default: 'images/default-bg.jpeg'
  }
})

//Collection API
const AccountCollection = mongoose.model('Account', AccountSchema)

//Fetch all accounts from the database
function getAllAcounts() {
  return AccountCollection.find()
}

//Fetch one specific account from the database
function getAccount(accountId){
  return AccountCollection.findById(accountId)
}

//Post a new account to the databse
function createAccount(accountObject){
  return AccountCollection.create(accountObject)
}

//Update a current account in the database
function updateAccount(accountId,newAccountSettings){
  return AccountCollection.findByIdAndUpdate(accountId,newAccountSettings)
}

//Delete an account in the database
function deleteAccount(accountId){
  return AccountCollection.findByIdAndDelete(accountId)
}

//Delete all accounts from database
function deleteAllAccounts(){
  return AccountCollection.deleteMany()
}
/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllAcounts,
  getAccount,
  createAccount,
  updateAccount,
  deleteAccount,
  deleteAllAccounts
}
