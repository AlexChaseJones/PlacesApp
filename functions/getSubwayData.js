const admin = require('firebase-admin');

module.exports = function (req, res) {
	admin.database().ref('mtaSubwayData/').once('value').then(snapshot => {
		res.send(snapshot.val());
	});
};
