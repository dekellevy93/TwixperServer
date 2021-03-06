const participantSearchInTwitter = require("../../business_logic/participant/participant_manipulated_data/participantSearchInTwitter");
const participantSpecifiedTwitterData = require("../../business_logic/participant/participant_manipulated_data/participantSpecifiedTwitterData");
const participantAuthUtils = require("../../business_logic/participant/participant_auth_utils/participantAuthUtils");
const participantFeed =  require("../../business_logic/participant/participant_manipulated_data/participantFeed");
const participantActionsOnTwitter =  require("../../business_logic/participant/participant_actions/participantActionsOnTwitter");

/** ______Search for participant_____ **/

async function searchTweets(q, participant){
    let output = await participantSearchInTwitter.searchTweets(q, participant)
    return output
}

async function searchUsers(q){    
    let output = await participantSearchInTwitter.searchUsers(q)
    return output
}



/**_______ Get data from twitter ______ **/

/**
 * feed for authenticated user
 * @param {*} user 
 */
async function getFeed(participant){
    let output = await participantFeed.getFeed(participant)
    return output
}

/* TODO add participant as input */
async function getUser(username){
    let output = await participantSpecifiedTwitterData.getUser(username)
    return output
}

async function getTweet(tweetId){
    let output = await participantSpecifiedTwitterData.getTweet(tweetId)
    return output
}

async function getUserFriends(username){
    let output = await participantSpecifiedTwitterData.getUserFriends(username)
    return output
}

async function getUserFollowers(username){
    let output = await participantSpecifiedTwitterData.getUserFollowers(username)
    return output
}

async function getUserTimeline(username){
    let output = await participantSpecifiedTwitterData.getUserTimeline(username)
    return output
}

async function getUserLikes(username){
    let output = await participantSpecifiedTwitterData.getUserLikes(username)
    return output
}



/** ______ Participant actions handlers ______ **/

async function likeTweet(participant, tweetId) {
    let output = await participantActionsOnTwitter.likeTweet(participant, tweetId)
    return output
}

async function unlikeTweet(participant, tweetId) {
    let output = await participantActionsOnTwitter.unlikeTweet(participant, tweetId)
    return output
}

async function publishTweet(participant, tweetParams) {
    let output = await participantActionsOnTwitter.publishTweet(participant, tweetParams)
    return output
}


/**_____ Participants auth ______ **/

/**
 * get experiment from db, deside group for praticipant, put inside the participant the data needed from experiment (group's manipulations) and add user to db
 * @param {*} userTwitterToken 
 * @param {*} expId 
 */
async function registerParticipant(oauthToken, oauthTokenSecret, expCode) {
    let output = await participantAuthUtils.registerParticipant(oauthToken, oauthTokenSecret, expCode)
    return output
}

/**
 * return user twitter id if found, else null
 * @param {*} userTwitterToken 
 * @param {*} userTwitterTokenSecret 
 */
async function getTwitterUserFromTokens(userTwitterToken, userTwitterTokenSecret) {
    let output = await participantAuthUtils.getTwitterUserFromTokens(userTwitterToken, userTwitterTokenSecret)
    return output
}






exports.getTwitterUserFromTokens = getTwitterUserFromTokens
exports.getFeed = getFeed
exports.searchTweets = searchTweets
exports.searchUsers = searchUsers
exports.getUser = getUser
exports.getTweet = getTweet
exports.getUserFriends = getUserFriends
exports.getUserFollowers = getUserFollowers
exports.getUserTimeline = getUserTimeline
exports.getUserLikes = getUserLikes
exports.registerParticipant = registerParticipant

exports.likeTweet = likeTweet
exports.unlikeTweet = unlikeTweet
exports.publishTweet = publishTweet