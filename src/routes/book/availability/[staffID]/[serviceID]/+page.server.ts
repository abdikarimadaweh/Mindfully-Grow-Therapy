import { catalogApi, locationsApi, bookingsApi, teamApi } from '../../../page.server';
import SQUARE_LOCATION_ID from '$env/static/private';
import { getStartAtDate, getEndAtDate } from '../../../../../util/funtion-helper';

export async function load({ params, url }) {
	//@ts-ignore
	const locationId = 'L7KYHVRCWWQHB';
	const ANY_STAFF_PARAMS = 'anyStaffMember';

	async function searchActiveTeamMembers(serviceId: any) {
		// Send request to get the service associated with the given item variation ID.
		const retrieveServicePromise = catalogApi.retrieveCatalogObject(serviceId, true);

		// Send request to list staff booking profiles for the current location.
		const listBookingProfilesPromise = bookingsApi.listTeamMemberBookingProfiles(
			true,
			undefined,
			undefined,
			locationId
		);

		// Send request to list all active team members for this merchant at this location.
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
		// We want to filter teamMemberBookingProfiles by checking that the teamMemberId associated with the profile is in our serviceTeamMembers.
		// We also want to verify that each team member is ACTIVE.
		const serviceVariation = services.object;

		const serviceTeamMembers = serviceVariation?.itemVariationData?.teamMemberIds || [];
		const activeTeamMembers = teamMembers?.map((teamMember) => teamMember.id);

		const bookableStaff = teamMemberBookingProfiles!.filter(
			(profile) =>
				serviceTeamMembers.includes(profile.teamMemberId!) &&
				activeTeamMembers?.includes(profile.teamMemberId)
		);
		return [services, bookableStaff.map((staff) => staff.teamMemberId)];
	}

	const serviceID = params.serviceID;
	const staffID = params.staffID;
	const serviceVersion = url.searchParams.get('version');
	const startDate = getStartAtDate();

	const searchRequest = {
		query: {
			filter: {
				locationId,
				segmentFilters: [
					{
						serviceVariationId: serviceID
					}
				],
				startAtRange: {
					endAt: getEndAtDate(startDate).toISOString(),
					startAt: startDate.toISOString()
				}
			}
		}
	};

	const retrieveServicePromise = catalogApi.retrieveCatalogObject(serviceID, true);
	let availabilities;
	// additional data to send to template
	let additionalInfo;
	// search availability for the specific staff member if staff id is passed as a param
	searchRequest.query.filter.segmentFilters[0].teamMemberIdFilter = {
		any: [staffID]
	};
	// get availability
	const availabilityPromise = bookingsApi.searchAvailability(searchRequest);
	// get team member booking profile - needed to display team member details in left pane
	const bookingProfilePromise = bookingsApi.retrieveTeamMemberBookingProfile(staffID);
	const [
		{ result },
		{ result: services },
		{
			result: { teamMemberBookingProfile }
		}
	] = await Promise.all([availabilityPromise, retrieveServicePromise, bookingProfilePromise]);
	availabilities = result.availabilities;
	additionalInfo = {
		bookingProfile: teamMemberBookingProfile,
		serviceItem: services.relatedObjects?.filter(
			(relatedObject) => relatedObject.type === 'ITEM'
		)[0],
		serviceVariation: services.object
	};

	const {
		result: { location }
	} = await locationsApi.retrieveLocation(locationId);
	//console.log(availabilities);
	//console.log(items);
	console.log(availabilities);

	return {
		location,
		availabilities,
		serviceID,
		serviceVersion,
		...additionalInfo
	};
}
