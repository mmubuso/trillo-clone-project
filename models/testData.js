//Import API's that will be used to delete data 
const accountApi = require('./account.js')
const boardApi = require('./board.js')
const listApi = require('./list.js')
const cardApi = require('./card.js')

//account test
const musiteli = {
    name: 'Musiteli Mubuso',
    username: 'mmubuso'
}
const sadia = {
    name: 'Sadia Arif',
    username: 'sarif'
}

//Board test data
const infoTechProject = {
    name: 'Information Technology Board',
}
const devOpsProject = {
    name: 'Developer Board'
}

//List test data
const infoTechToDo = {
    name: 'To Do'
}
const infoTechDoing = {
    name: 'Doing'
}
const infoTechDone = {
    name: 'Done'
}
const devOpsToDo = {
    name: 'To Do'
}
const devOpsDoing = {
    name: 'Doing'
}
const devOpsDone = {
    name: 'Done'
}

//Card Test data
const infoTechToDoGraduate = {
    description: "Graduate college"
}
const infoTechToDoGetMarried = {
    description: "Get Married"
}
const infoTechToDoGetBuyAHouse = {
    description: "Boy a house"
}
const infoTechDoingWorking = {
    description: "Working hard"
}
const infoTechDoingChangeTire = {
    description: "Changing tire"
}
const infoTechDoingRun5k = {
    description: "Running a 5k"
}
const infoTechDoneLose5Pounds = {
    description: "Lose 5 pounds by January"
}
const infoTechDoneLose10Pounds = {
    description: "Lose 10 pounds by February"
}
const infoTechDoneLose15Pounds = {
    description: "Lose 15 pounds by March"
}
const devOpsToDoGraduate = {
    description: "Graduate bootcamp"
}
const devOpsToDoGetMarried = {
    description: "Get Married"
}
const devOpsToDoGetBuyAHouse = {
    description: "Boy a house"
}
const devOpsDoingWorking = {
    description: "Working hard"
}
const devOpsDoingChangeTire = {
    description: "Changing tire"
}
const devOpsDoingRun5k = {
    description: "Running a 5k"
}
const devOpsDoneLose5Pounds = {
    description: "Lose 5 pounds by January"
}
const devOpsDoneLose10Pounds = {
    description: "Lose 10 pounds by February"
}
const devOpsDoneLose15Pounds = {
    description: "Lose 15 pounds by March"
}

accountApi.deleteAllAccounts()
    //Delete all items in database
    .then(() => boardApi.deleteAllBoards())
    .then(() => listApi.deleteAllLists())
    .then(() => cardApi.deleteAllCards())
    .then(() => accountApi.createAccount(musiteli))
    //create account and assign a board the id of that account
    .then((newAccount) => {
        return boardApi.createBoard(newAccount._id, devOpsProject)
    })
    //Create all the lists assign the id of the board to the list 
    .then(newBoard => {
        return Promise.all([listApi.createList(newBoard._id, devOpsDoing),
        listApi.createList(newBoard._id, devOpsDone), listApi.createList(newBoard._id, devOpsToDo)
        ])
    })
    .then((args) => {
        return Promise.all([cardApi.createCard(args[0]._id,devOpsDoingChangeTire),cardApi.createCard(args[0]._id,devOpsDoingRun5k),cardApi.createCard(args[0]._id,devOpsDoingWorking),
        cardApi.createCard(args[1]._id,devOpsDoneLose15Pounds),cardApi.createCard(args[1]._id,devOpsDoneLose5Pounds),cardApi.createCard(args[1]._id,devOpsDoneLose10Pounds),cardApi.createCard(args[2]._id,devOpsToDoGetBuyAHouse),cardApi.createCard(args[2]._id,devOpsToDoGetMarried),cardApi.createCard(args[2]._id,devOpsToDoGraduate)
        ])})
    .then(() => {
        console.log('Data was deleted and updated')
        process.exit()
    })
    .catch((err) => {
        console.log(err)
        process.exit()
    })