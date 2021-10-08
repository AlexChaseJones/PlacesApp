const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const getListingsByPosition = require('./getListingsByPosition');
const getLikerProfiles = require('./getLikerProfiles');
const getLikedListings = require('./getLikedListings');
const likeListing = require('./likeListing');
const getSubwayData = require('./getSubwayData');

exports.getListingsByPosition = functions.https.onRequest(getListingsByPosition);
exports.getLikerProfiles = functions.https.onRequest(getLikerProfiles);
exports.getLikedListings = functions.https.onRequest(getLikedListings);
exports.likeListing = functions.https.onRequest(likeListing);
exports.getSubwayData = functions.https.onRequest(getSubwayData);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
