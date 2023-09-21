import { catalogApi, locationsApi, bookingsApi, customersApi } from '../../page.server';
import SQUARE_LOCATION_ID from '$env/static/private';

export async function load({ params, url, request }) {
	const serviceId = url.searchParams.get('serviceId') as string;
	const staffId = url.searchParams.get('staffId') as string;
	const serviceVersion = url.searchParams.get('version') as string;
	const startAt = url.searchParams.get('startAt') as string;

	const data = await request.formData();

	console.log(data);
	/*
	const customerNote = req.body.customerNote;
  	const emailAddress = req.body.emailAddress;
  	const familyName = req.body.familyName;
  	const givenName = req.body.givenName;
	*/

	console.log(serviceId);

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
