import { catalogApi, locationsApi, bookingsApi } from '../page.server';
import SQUARE_LOCATION_ID from '$env/static/private';

export async function load({ params, url }) {
	const serviceId = url.searchParams.get('serviceId') as string;
	const staffId = url.searchParams.get('staffId') as string;
	const serviceVersion = url.searchParams.get('version') as string;
	const startAt = url.searchParams.get('startAt') as string;

	console.log(serviceId);
	/*
	const serviceVersion = params.version;
	const staffId = params.staff;
	const startAt = params.startAt;
    */
	//@ts-ignore
	const locationId = 'L7KYHVRCWWQHB';

	const {
		result: { location }
	} = await locationsApi.retrieveLocation(locationId);
	console.log(location);
	//console.log(items);

	return {
		location
	};
}
