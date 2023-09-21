import { catalogApi, locationsApi } from '../page.server';
import SQUARE_LOCATION_ID from '$env/static/private';

export async function load() {
	//@ts-ignore
	const locationId = 'L7KYHVRCWWQHB';
	const {
		result: { items }
	} = await catalogApi.searchCatalogItems({
		enabledLocationIds: [locationId],
		productTypes: ['APPOINTMENTS_SERVICE']
		//cancel
	});

	const {
		result: { location }
	} = await locationsApi.retrieveLocation(locationId);
	//console.log(location);
	//console.log(items);

	return {
		items,
		location
	};
}
