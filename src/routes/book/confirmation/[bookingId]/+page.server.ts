import { bookingsApi, catalogApi, locationsApi } from '../../page.server';
import SQUARE_LOCATION_ID from '$env/static/private';
/** @type {import('./$types').Actions} */

export async function load({ params }) {
	const locationId = 'L7KYHVRCWWQHB';

	const bookingId = params.bookingId;
	const {
		result: { booking }
	} = await bookingsApi.retrieveBooking(bookingId);
	//@ts-ignore
	const serviceVariationId: string = booking.appointmentSegments[0].serviceVariationId as string;
	//@ts-ignore
	const teamMemberId = booking.appointmentSegments[0].teamMemberId;

	// Make API call to get service variation details
	const retrieveServiceVariationPromise = catalogApi.retrieveCatalogObject(
		serviceVariationId,
		true
	);

	// Make API call to get team member details
	const retrieveTeamMemberPromise = bookingsApi.retrieveTeamMemberBookingProfile(teamMemberId);

	// Wait until all API calls have completed
	const [
		{ result: service },
		{
			result: { teamMemberBookingProfile }
		}
	] = await Promise.all([retrieveServiceVariationPromise, retrieveTeamMemberPromise]);

	const serviceVariation = service.object;
	//@ts-ignore
	const serviceItem = service.relatedObjects.filter(
		(relatedObject) => relatedObject.type === 'ITEM'
	)[0];

	const {
		result: { location }
	} = await locationsApi.retrieveLocation(locationId);
	console.log(location);
	//console.log(items);

	return {
		booking,
		serviceItem,
		serviceVariation,
		teamMemberBookingProfile,
		location
	};
}
