const reportCreator = require("../../business_logic/researchers/experiments/experimentReportCreator")
const experiments = require('../../business_logic/researchers/experiments/researcherExperiments')
const database = require("../../business_logic/db/DBCommunicator.js");


/**
 * make experiment active
 * @param {} reqExpObj 
 */
async function activateNewExperiment(reqExpObj){
    return await experiments.activateNewExperiment(reqExpObj)
}

/**
 * get all researcher's experiments
 */
// TODO: Send the user's cookie as a parameter
async function getExperiments(){
    return await experiments.getExperiments()
}

/**
 * returns the researcher with specified id. If not exists, returns null
 * @param {researcher id} id 
 */
async function getResearcher(id) {
    return await database.getResearcher(id)
}

/**
 * add new researcher to db
 * @param {unuique id to authenticate the researcher} id 
 */
async function registerResearcher(id) {
    return await researcherAuthUtils.registerResearcher(id)
}
/**
 * create report for experiment (two files)
 * @param {*} expId 
 */
async function createExperimentReport(expId){
    return await reportCreator.createReport(expId)
}

exports.activateNewExperiment = activateNewExperiment
exports.getExperiments = getExperiments
exports.createExperimentReport = createExperimentReport
exports.getResearcher = getResearcher
exports.registerResearcher = registerResearcher
