import type { RequestHandler } from './$types';
import { catalogApi } from '../../book/page.server';

const locationId = 'L7KYHVRCWWQHB';

export const GET = async () => {
	//const cancel = request.query.get('cancel');

	const {
		result: { items }
	} = await catalogApi.searchCatalogItems({
		enabledLocationIds: [locationId],
		productTypes: ['APPOINTMENTS_SERVICE']
		//cancel
	});
	//const responseData = response.result.items;

	console.log(items);

	//console.log(items);
	return new Response(JSON.stringify(items));
};
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
