//import api

//variables
//button changing list name
let editButtonForList = $('.list-of-cards .fa-edit')
//holds name for board
let editBoard = $('.board-edit')
//store board list
let board = document.getElementsByClassName('board-of-lists')[0]
//store item being dragged
let draggedItem
//Item that shows when dragged item goes over valid dropzone
let shadow = document.createElement('div')
shadow.style.height = "80px"
shadow.style.backgroundColor = "black"
shadow.style.opacity = 0.6
shadow.style.borderRadius = "20px"
//Mongoose id of new location for dragged item
let listId;
//text that was in the dropped dragged item
let description1;
//Urls to be used with fetch api
let postURL
let deleteURL


//functions
//Function to change the name of a list or board
let changeName = (evt) => {
    let listName = evt.innerText
    $(evt).replaceWith(`<input type="text" name="name" value=${listName}><input type="submit" value="Update">`)
}

//function for updating the card database collection
let postFetch = () => {
    fetch(postURL , {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({ description: description1 }), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.text())
        .then(response => console.log(response))
        .catch(error => console.error(error));
}

//delete a card from the database
let deleteFetch = () => {
    fetch(deleteURL, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.text())
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

//Run functions for drop eventlistenrer
let runDropEvents = (evt) => {
    listId = evt.target.classList[2]
    draggedItemListId = draggedItem.classList[1]
    postURL = postURL + listId + '/cards/'
    deleteURL = deleteURL  + draggedItemListId + '/cards/' + draggedItem.classList[2] + '?_method=DELETE'
    description1 = draggedItem.children[0].innerText
    evt.target.removeChild(shadow)
    evt.target.appendChild(draggedItem)
}



//eventlisteners
//Edits list name
editButtonForList.on('click', (evt) => changeName(evt.target.parentElement))
//Edits board name
editBoard.on('click', (evt) => changeName(evt.target))

//Drag and drop listeners
//stores dragged item in global variable when drag starts
board.addEventListener('dragstart', (evt) => {
    draggedItem = evt.target
    postURL = draggedItem.baseURI + "/lists/"
    deleteURL = draggedItem.baseURI + "/lists/"
    draggedItem.style.opacity = 0.5
})

//resets dragged item to regualr opacity at the end of drag
board.addEventListener('dragend', (evt) => {
    draggedItem.style.opacity = ""
})

//When a dragged item is dragged over a drop zone
board.addEventListener('dragover', (evt) => {
    evt.preventDefault()
})

//when a dragged item enters a dropzone
board.addEventListener('dragenter', (evt) => {
    if (evt.target.classList[0] === "dropTarget") {
        evt.target.appendChild(shadow)
    }
})

//When a dragged item leaves a dropzone
board.addEventListener('dragleave', (evt) => {
    if (evt.target.classList[0] === "dropTarget") {
        evt.target.removeChild(shadow)
    }
})

//when dragged item is dropped
board.addEventListener('drop', (evt) => {
    if (evt.target.classList[0] === "dropTarget") {
        runDropEvents(evt)
        postFetch()
        deleteFetch()
        console.log(deleteURL)
    }
})

