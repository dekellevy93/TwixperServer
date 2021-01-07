var makeDb = require("./DBConnector.js").makeDb


async function insertAction(action) {
    const db = await makeDb()
    let result = null
    try{
        collection = db.collection("Actions")
        result = await collection.insertOne(action)
    }
    catch(e){
        return false
    }
    if (result) {
        return true
    }
    return false
}


async function getExpActions(expId) {
    const db = await makeDb()
    let result = null
    try{
        collection = db.collection("Actions")
        result = await collection.findAll({ exp_id: expId },
            { _id:0, exp_id: 0 })
    }
    catch(e){
        return null
    }
    return result
}

async function deleteActions() {
    const db = await makeDb()
    let result = null
    try{
        collection = db.collection("Actions")
        result = await collection.deleteMany({})
    }
    catch(e){
        return false
    }
    if (result) {
        return true
    }
    return false


}
module.exports = {
    insertAction: insertAction,
    getExpActions, getExpActions,
    deleteActions: deleteActions
}