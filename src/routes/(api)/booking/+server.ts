import { redirect } from '@sveltejs/kit';
import { bookingsApi, catalogApi, locationsApi, customersApi } from '../../book/page.server';
import { convertMsToMins } from '../../../util/funtion-helper';
import { v4 as uuidv4 } from 'uuid';

export async function POST({ request, url }) {
	async function getCustomerID(givenName: string, familyName: string, emailAddress: string) {
		const {
			result: { customers }
		} = await customersApi.searchCustomers({
			query: {
				filter: {
					emailAddress: {
						exact: emailAddress
					}
				}
			}
		});

		if (customers && customers.length > 0) {
			const matchingCustomers = customers.filter(
				(customer: any) => customer.givenName === givenName && customer.familyName === familyName
			);

			// If a matching customer is found, return the first matching customer
			if (matchingCustomers.length > 0) {
				return matchingCustomers[0].id;
			}
		}

		// If no matching customer is found, create a new customer and return its ID
		const {
			result: { customer }
		} = await customersApi.createCustomer({
			emailAddress,
			familyName,
			givenName,
			idempotencyKey: uuidv4(),
			referenceId: 'BOOKINGS-SAMPLE-APP'
		});

		return customer?.id;
	}

	const locationId = 'L7KYHVRCWWQHB';

	const serviceId = url.searchParams.get('serviceId') as string;
	const staffId = url.searchParams.get('staffId') as string;
	const serviceVariationVersion = BigInt(url.searchParams.get('version') as string);
	const startAt = url.searchParams.get('startAt') as string;

	const formData = await request.formData();

	const customerNote = formData.get('customerNotes') as string;
	const emailAddress = formData.get('emailAddress') as string;
	const familyName = formData.get('familyName') as string;
	const givenName = formData.get('givenName') as string;
	try {
		const {
			result: { object: catalogItemVariation }
		} = await catalogApi.retrieveCatalogObject(serviceId);

		const durationMinutes = convertMsToMins(
			catalogItemVariation?.itemVariationData?.serviceDuration
		);

		// Create booking
		const {
			result: { booking }
		} = await bookingsApi.createBooking({
			booking: {
				appointmentSegments: [
					{
						durationMinutes,
						serviceVariationId: serviceId,
						serviceVariationVersion,
						teamMemberId: staffId
					}
				],
				customerId: await getCustomerID(givenName, familyName, emailAddress),
				customerNote,
				locationId,
				startAt
			},
			idempotencyKey: uuidv4()
		});

		const {
			result: { location }
		} = await locationsApi.retrieveLocation(locationId);

		//Response.redirect(`/book/confirmation/${booking?.id}`);
		return new Response(JSON.stringify(booking));
	} catch (error) {
		console.error(error);
	}
}

/*
export async function GET() {
	const {
		result: { items }
	} = await catalogApi.searchCatalogItems({
		enabledLocationIds: [locationId],
		productTypes: ['APPOINTMENTS_SERVICE']
		//cancel
	});
	console.log(items);
	const response = await fetch('https://api.example.com/objects');
	const data = await response.json();

	return items;
}
*/
