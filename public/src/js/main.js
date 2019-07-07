//variables
let editButton = $('.list-of-cards .fa-edit')

//functions
let changeListName = (evt)=>{
    let listName = evt.target.parentElement.innerText
    $(evt.target.parentElement).replaceWith(`<input type="text" name="name" value=${listName}><input type="submit" value="Update">`)
}

//eventlisteners
editButton.on('click',(evt)=> changeListName(evt))
