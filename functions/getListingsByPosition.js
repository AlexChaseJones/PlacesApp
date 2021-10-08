const admin = require('firebase-admin');

module.exports = function (req, res) {
	const {
		longitude, latitude, longitudeDelta, latitudeDelta, // regions
		minimum, maximum, deposit // filters
	} = req.body;

	if (!longitude || !latitude || !longitudeDelta || !latitudeDelta) {
		res.status(422).send({ error: 'must provide latitude and longitude' });
	}

	const lonMin = longitude - (longitudeDelta / 2);
	const lonMax = longitude + (longitudeDelta / 2);
	const latMin = latitude - (latitudeDelta / 2);
	const latMax = latitude + (latitudeDelta / 2);

	admin.database().ref('Listers/').once('value').then(snapshot => {
		let listers = snapshot.val();
		listers = Object.keys(listers).map(key => (
			listers[key]
		));

		const listingsInView = listers.filter(({ listing }) => {
			if (listing.latitude >= latMin &&
					listing.latitude <= latMax &&
					listing.longitude >= lonMin &&
					listing.longitude <= lonMax) {
				if ((minimum && listing.price < minimum) ||
						(maximum && listing.price > maximum) ||
						(deposit && listing.deposit > 0)) {
					return false;
				}
				return true;
			}
			return false;
		});

		res.send(listingsInView);
	});
};
