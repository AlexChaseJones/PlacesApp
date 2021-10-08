const admin = require('firebase-admin');

module.exports = function (req, res) {
	const { userId, uid } = req.body;
	let now = admin.database.ServerValue.TIMESTAMP;


	admin.database().ref(`/Seekers/${userId}/likedPosts/${uid}`)
	.set({
		timestamp: now,
		uid,
		status: 'pending',
	}, err => {
		if (err) res.send(err);
		now = admin.database.ServerValue.TIMESTAMP;

		admin.database().ref(`/Listers/${uid}/listing/likesToReview/${userId}`)
		.set({
			uid: userId,
			timestamp: now
		}, err2 => {
			if (err2) res.send(err);
			res.send({
				status: 'pending',
				timestamp: admin.database.ServerValue.TIMESTAMP
			});
		});
	});
};
