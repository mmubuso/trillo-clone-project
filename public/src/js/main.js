//variables
let editButtonForList = $('.list-of-cards .fa-edit')
let editBoard = $('.board-edit')
//functions
let changeName = (evt)=>{
    let listName = evt.innerText
    $(evt).replaceWith(`<input type="text" name="name" value=${listName}><input type="submit" value="Update">`)
}

//eventlisteners
editButtonForList.on('click',(evt)=> changeName(evt.target.parentElement))
editBoard.on('click',(evt)=> changeName(evt.target))
