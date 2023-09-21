import { catalogApi, locationsApi, bookingsApi } from '../page.server';
import SQUARE_LOCATION_ID from '$env/static/private';
import { json } from '@sveltejs/kit';

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		const emailAddress = data.get('emailAddress');
		const familyName = data.get('givenName');
		const givenName = data.get('familyName');
		const customerNote = data.get('customerNote');
		console.log(await json(request.body));
	}
};

export async function load({ params, url }) {
	console.log('Hello');
	const serviceId = url.searchParams.get('serviceId') as string;
	const staffId = url.searchParams.get('staff') as string;
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

	const retrieveServicePromise = catalogApi.retrieveCatalogObject(serviceId, true);

	const retrieveTeamMemberPromise = bookingsApi.retrieveTeamMemberBookingProfile(staffId);

	const [
		{
			result: { object: serviceVariation, relatedObjects }
		},
		{
			result: { teamMemberBookingProfile }
		}
	] = await Promise.all([retrieveServicePromise, retrieveTeamMemberPromise]);
	const serviceItem = relatedObjects?.filter((relatedObject) => relatedObject.type === 'ITEM')[0];

	const {
		result: { location }
	} = await locationsApi.retrieveLocation(locationId);
	console.log(location);
	//console.log(items);

	return {
		serviceItem,
		serviceVariation,
		serviceVersion,
		startAt,
		teamMemberBookingProfile,
		location
	};
}
