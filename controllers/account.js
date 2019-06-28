/* 
 *
 */
const express = require('express')

/* 
 * Import the api files from the models
 * 
 */
const accountApi = require('../models/account.js')

/* 
 * the router will "contain" all the request handlers that you define in this file.
 */
const accountRouter = express.Router()

// Path to get all accounts
accountRouter.get('/', (req, res) => {
  accountApi.getAllAcounts()
    .then(accounts =>{
      res.send(accounts)
    })
})

//Path to get one account
accountRouter.get('/:accountId', (req,res) => {
  accountApi.getAccount()
    .then(account => {
      res.send(account)
    })
})

//Path to add one account to 
accountRouter.post('/',(req,res) => {
  accountApi.createAccount(req.body)
    .then(() => {
      res.send('account was created')
    })
})


//Path 
/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  accountRouter
}
