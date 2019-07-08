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
shadow.style.height= "80px"
shadow.style.backgroundColor = "black"
shadow.style.opacity = 0.6
shadow.style.borderRadius = "20px"
//Mongoose id of new location for dragged item
let listId;
//text that was in the dropped dragged item
let description;

//functions
let changeName = (evt)=>{
    let listName = evt.innerText
    $(evt).replaceWith(`<input type="text" name="name" value=${listName}><input type="submit" value="Update">`)
}

//eventlisteners
//Edits list name
editButtonForList.on('click',(evt)=> changeName(evt.target.parentElement))
//Edits board name
editBoard.on('click',(evt)=> changeName(evt.target))

//Drag and drop listeners
//stores dragged item in global variable when drag starts
board.addEventListener('dragstart',(evt)=> {
    draggedItem = evt.target
    draggedItem.style.opacity = 0.5
})

//resets dragged item to regualr opacity at the end of drag
board.addEventListener('dragend',(evt)=> {
    draggedItem.style.opacity = ""
})

//When a dragged item is dragged over a drop zone
board.addEventListener('dragover',(evt) => {
    evt.preventDefault()
})

//when a dragged item enters a dropzone
board.addEventListener('dragenter',(evt)=> {
    if(evt.target.classList[0] === "dropTarget"){
        evt.target.appendChild(shadow)
    }
})

//When a dragged item leaves a dropzone
board.addEventListener('dragleave',(evt)=> {
    if(evt.target.classList[0] === "dropTarget"){
        evt.target.removeChild(shadow)
    }
})

//when dragged item is dropped
board.addEventListener('drop',(evt) => {
    if(evt.target.classList[0] === "dropTarget"){
        console.log('success')
        listId = evt.target.classList[2]
        description = draggedItem.innerText
        evt.target.removeChild(shadow)
        draggedItem.classList[1] = listId
        evt.target.appendChild(draggedItem)
    }
})