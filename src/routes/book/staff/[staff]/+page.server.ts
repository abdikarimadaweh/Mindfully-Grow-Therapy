import { catalogApi, bookingsApi, teamApi, locationsApi } from '../../page.server';
import SQUARE_LOCATION_ID from '$env/static/private';
import type { PageServerLoad } from './$types';

export async function load({ params }) {
	const locationId = 'L7KYHVRCWWQHB';
	const serviceId = params.staff;
	console.log(serviceId);

	const retrieveServicePromise = catalogApi.retrieveCatalogObject(serviceId, true);

	const listBookingProfilesPromise = bookingsApi.listTeamMemberBookingProfiles(
		true,
		undefined,
		undefined,
		locationId
	);

	const listActiveTeamMembersPromise = teamApi.searchTeamMembers({
		query: {
			filter: {
				locationIds: [locationId],
				status: 'ACTIVE'
			}
		}
	});

	const [
		{ result: services },
		{
			result: { teamMemberBookingProfiles }
		},
		{
			result: { teamMembers }
		}
	] = await Promise.all([
		retrieveServicePromise,
		listBookingProfilesPromise,
		listActiveTeamMembersPromise
	]);

	const serviceVariation = services.object;
	const serviceItem = services.relatedObjects?.filter(
		(relatedObject) => relatedObject.type === 'ITEM'
	)[0];

	const serviceTeamMembers = serviceVariation?.itemVariationData?.teamMemberIds || [];
	const activeTeamMembers = teamMembers?.map((teamMember) => teamMember.id);

	const bookableStaff = teamMemberBookingProfiles?.filter(
		(profile) =>
			serviceTeamMembers.includes(profile.teamMemberId!) &&
			activeTeamMembers?.includes(profile.teamMemberId)
	);

	const {
		result: { location }
	} = await locationsApi.retrieveLocation(locationId);

	return {
		bookableStaff,
		serviceItem,
		serviceVariation,
		serviceId,
		location
	};
}
