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

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const cardRouter = express.Router({ mergeParams: true })


//Get all cards with a specific Id
cardRouter.get('/', (req, res) => {
  cardApi.getAllCardsByListId(req.params.listId)
    .then(cards => {
      res.send(cards)
    })
})

//Get a specific card 
cardRouter.get('/:cardId', (req, res) => {
  cardApi.getCard(req.params.cardId)
    .then(card => {
      res.send(card)
    })
})

//Create a card object
cardRouter.post('/', (req, res) => {
  cardApi.createCard(req.params.listId, req.body)
    .then(() => {
      res.send("card created")
    })
})

cardRouter.put('/:cardId', (req, res) => {
  cardApi.updateCard(req.params.cardId, req.body)
    .then(() => {
      res.send('Item was updated')
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  cardRouter
}
