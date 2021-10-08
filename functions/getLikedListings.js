const admin = require('firebase-admin');

module.exports = function (req, res) {
	const { likedPosts } = req.body;

	const likedListingsArray = Object.keys(likedPosts).map(key => likedPosts[key]);
	const uids = likedListingsArray.map(listing => listing.uid);

	const likedProfiles = [];

	admin.database().ref('/Listers').once('value').then(snapshot => {
		snapshot.forEach(child => {	
			const index = uids.indexOf(child.key);
			if (index !== -1) {
				const obj = Object.assign(
					{},
					child.val(),
					{
						likedTimestamp: likedListingsArray[index].timestamp,
						status: likedListingsArray[index].status,
					}
				);
				likedProfiles.push(obj);
			}
			if (likedProfiles.length === likedListingsArray.length) return true;
		});

		res.send(likedProfiles);
	});
};
