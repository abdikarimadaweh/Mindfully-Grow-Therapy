import { redirect } from '@sveltejs/kit';
import { bookingsApi, catalogApi, locationsApi, customersApi } from '../../book/page.server';
import { convertMsToMins } from '../../../util/funtion-helper';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: any, URL: any) {
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
	/*
	
	const serviceId = url.searchParams.get('serviceId') as string;
	const staffId = url.searchParams.get('staffId') as string;
	const serviceVersion = url.searchParams.get('version') as string;
	const startAt = url.searchParams.get('startAt') as string;
   */

	//const formData = await createFormData(request);

	const data = await request.formData();

	const { serviceId, staffId, serviceVariationVersion, startAt } = request.params;
	console.log(data);

	const customerNote = request.body.customerNote;
	const emailAddress = request.body.emailAddress;
	const familyName = request.body.familyName;
	const givenName = request.body.givenName;

	console.log(serviceId);

	const {
		result: { object: catalogItemVariation }
	} = await catalogApi.retrieveCatalogObject(serviceId);
	//@ts-ignore
	const durationMinutes = convertMsToMins(catalogItemVariation.itemVariationData.serviceDuration);

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
	console.log(location);
	//console.log(items);

	return redirect(300, `/book/confirmation/${booking?.id}`);
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
