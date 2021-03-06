/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `boardApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const formatCardsApi = require('../models/formatCardsArray.js')
const boardApi = require('../models/board.js')
const listApi = require('../models/list.js')
const cardApi = require('../models/card.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from boardRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const boardRouter = express.Router({ mergeParams: true })

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */




//Get all boards associated with accountId
boardRouter.get('/', (req, res) => {
  boardApi.getAllBoardsForOneAccount(req.params.accountId)
    .then(accountBoards => {
      res.send(accountBoards)
    })
})

//Get a speific board and all of its lists and cards
boardRouter.get('/:boardId', (req, res) => {
  boardApi.getBoard(req.params.boardId)
    .then(boards => {
      listApi.getAllListsByBoardId(boards)
        .then(lists => {
          Promise.all(lists.map(list => cardApi.getAllCardsByListId(list._id)))
            .then(cards => {
              //send data to get formatted into a usuable form
              let boardObjectId = boards._id
              cards = formatCardsApi.createNewObj(cards, boardObjectId)
              res.render('boards/board', { boards, lists, cards })
            })
        })
    })
    .catch((err) => {
      console.log(err)
    })
})

//creates a new trillo board 
boardRouter.post('/', (req, res) => {
  boardApi.createBoard(req.params.accountId, req.body)
    .then(() => {
      res.redirect(`/accounts/${req.params.accountId}/`)
    })
})

//Update an exisiting board
boardRouter.put('/:boardId', (req, res) => {
  boardApi.updatedBoard(req.params.boardId, req.body)
    .then(() => {
      res.redirect(`/accounts/${req.params.accountId}/boards/${req.params.boardId}`)
    })
})

//Delete an exisiting board
boardRouter.delete('/:boardId', (req, res) => {
  boardApi.deleteBoard(req.params.boardId)
    .then(() => {
      listApi.deleteAllLists(req.params.boardId)
        .then(()=>{
          cardApi.deleteAllCards(req.params.listId)
            .then(()=>{
              res.redirect(`/accounts/${req.params.accountId}/`)
            })
        })
    })
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  boardRouter
}
