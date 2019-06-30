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
const listApi = require('../models/list.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const listRouter = express.Router({mergeParams: true})

// IMPORTANT NOTICE //
// for all paths besides the root get path, you have to call a
//    a nested req or res to access the body or parms. Currently
//    investigating as why we have to do this

listRouter.get('/', (req, res) => {
  listApi.getAllListsByBoardId(req.params.boardId)
    .then(lists => {
      res.send(lists)
    })
})

//Get a single list 
listRouter.get('/:listId',(res,req) => {
  listApi.getList(req.req.params.listId)
    .then(list => {
      res.res.send(list)
    })
})

//Create a list item to the database
//
listRouter.post('/',(res,req) => {
  listApi.createList(req.req.params.boardId, req.req.body)
    .then(() => {
      res.res.send('Object was created')
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
