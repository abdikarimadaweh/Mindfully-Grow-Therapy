const QUERY_RANGE_PERIOD_DAYS = 30;

const MIN_BOOKING_START_TIME_HOURS = 4;

export function getEndAtDate(startDate: any) {
	const endDate = new Date(startDate);
	// only allow booking end time 30 days from start
	endDate.setDate(endDate.getDate() + QUERY_RANGE_PERIOD_DAYS);
	return endDate;
}

/**
 * Generate start date for search
 * @returns date
 */
export function getStartAtDate() {
	const date = new Date();
	// only allow booking start time 4 hours from now
	date.setHours(date.getHours() + MIN_BOOKING_START_TIME_HOURS);
	return date;
}
