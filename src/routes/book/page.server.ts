import { Client } from 'square';
//import { env } from 'import-meta';

//@ts-ignore
const env = 'production';
const accessToken = 'EAAAFD2hLMiN-hgfeBIs6np82siuHpFz0uoNecerDtcRFUQw8Vu7e7_qHHXblEhI';

const config = {
	accessToken,
	environment: env
};

//@ts-ignore
const { customersApi, bookingsApi, catalogApi, locationsApi, teamApi } = new Client(config);

export { customersApi, bookingsApi, catalogApi, locationsApi, teamApi };
