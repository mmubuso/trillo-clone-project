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
  accountApi.getAccount(req.params.accountId)
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

//Path to update a specific account
accountRouter.put('/:accountId',(req,res) => {
  accountApi.updateAccount(req.params.accountId,req.body)
    .then(() => {
      res.send('Account was updated')
    })
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  accountRouter
}
