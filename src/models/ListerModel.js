export default class ListerModel {
	constructor(lister) {
		this.address = this._getAddress(lister.listing.address);
		this.profile = lister.profile;
		this.uid = lister.uid;
		this.listing = lister.listing;
	}

	_getAddress = ({ apartment = '', city, state, street, zipcode }) => ({
		apartment,
		city,
		state,
		street,
		zipcode
	})
}
