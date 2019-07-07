/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const cardApi = require('../models/card.js')
const listApi = require('../models/list.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const listRouter = express.Router({ mergeParams: true })

listRouter.get('/', (req, res) => {
  listApi.getAllListsByBoardId(req.params.boardId)
    .then(lists => {
      res.send(lists)
    })
})

//Get a single list 
listRouter.get('/:listId', (req, res) => {
  listApi.getList(req.params.listId)
    .then(list => {
      res.send(list)
    })
})

//Create a list item to the database
listRouter.post('/', (req, res) => {
  listApi.createList(req.params.boardId, req.body)
    .then(() => {
      res.redirect(`/accounts/${req.params.accountId}/boards/${req.params.boardId}`)
    })
})

//Update a list item from the database
listRouter.put('/:listId', (req, res) => {
  listApi.updateList(req.params.listId, req.body)
    .then(() => {
      res.redirect(`/accounts/${req.params.accountId}/boards/${req.params.boardId}`)
    })
})

//Delete a list and its cards from the database
listRouter.delete('/:listId', (req, res) => {
  listApi.deleteList(req.params.listId)
    .then(() => {
      cardApi.deleteAllCards(req.params.listId)
        .then(() => {
          res.redirect(`/accounts/${req.params.accountId}/boards/${req.params.boardId}`)
        })
    })
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  listRouter
}
