/* 
 *
 */
const express = require('express')

/* 
 * Import the api files from the models
 * 
 */
const accountApi = require('../models/account.js')
const boardApi = require('../models/board.js')
/* 
 * the router will "contain" all the request handlers that you define in this file.
 */
const accountRouter = express.Router()

// Path to get all accounts
accountRouter.get('/', (req, res) => {
  accountApi.getAllAcounts()
    .then(accounts => {
      res.render('accounts/accounts', { accounts })
    })
})

//Path to form making an account
accountRouter.get('/new', (req, res) => {
  res.render('accounts/createAccount')
})

//Gets edit form from views
accountRouter.get('/:accountId/edit', (req, res) => {
  accountApi.getAccount(req.params.accountId)
    .then(account => {
      res.render('accounts/editFormAccount', { account })
    })
})

//Path to get one account
accountRouter.get('/:accountId', (req, res) => {
  accountApi.getAccount(req.params.accountId)
    .then(account => {
      boardApi.getAllBoardsForOneAccount(account._id)
        .then(boards => {
          res.render('accounts/account', { boards, account })
        })
    })
})

//Path to add one account to 
accountRouter.post('/', (req, res) => {
  accountApi.createAccount(req.body)
    .then(() => {
      res.redirect('/accounts')
    })
})

//Path to update a specific account
accountRouter.put('/:accountId', (req, res) => {
  accountApi.updateAccount(req.params.accountId, req.body)
    .then(() => {
      res.redirect('/accounts')
    })
})

//Path to delete an account
accountRouter.delete('/:accountId', (req, res) => {
  accountApi.deleteAccount(req.params.accountId)
    .then(() => {
      res.redirect('/accounts')
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
