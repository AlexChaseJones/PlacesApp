const admin = require('firebase-admin');

module.exports = function (req, res) {
	const { likesToReview } = req.body;

	const likersArray = Object.keys(likesToReview).map(key => likesToReview[key]);
	const uids = likersArray.map(liker => (liker.uid));

	const likerProfiles = [];

	admin.database().ref('/Seekers').once('value').then(snapshot => {
		snapshot.forEach(child => {	
			const index = uids.indexOf(child.key);
			if (index !== -1) {
				const obj = Object.assign(
					{},
					child.val(),
					{ 
						likedTimestamp: likersArray[index].timestamp
					}
				);
				likerProfiles.push(obj);
			}
			if (likerProfiles.length === likersArray.length) return true;
		});

		res.send(likerProfiles);
	});
};
