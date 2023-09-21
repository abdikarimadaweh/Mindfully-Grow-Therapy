import { v4 as uuidv4 } from 'uuid';

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
export function formatMoney(value: any, currency: any) {
	let valueAsNumber = Number(value);
	// Create number formatter.
	const props = {
		style: 'currency',
		currency: currency,
		minimumFractionDigits: 2
	};
	// If the value is an integer, show no decimal digits.
	if (valueAsNumber % 1 == 0) {
		props.minimumFractionDigits = 0;
	}

	// Some currencies don't need to use higher denominations to represent values.
	if (currency !== 'JPY') {
		valueAsNumber /= 100.0;
	}
	const formatter = new Intl.NumberFormat('en-US', props);
	return formatter.format(valueAsNumber);
}

export function getStaffInitials(displayName: any) {
	return displayName.toUpperCase()[0];
}

export function formatTime(durationInMs: any) {
	const duration = Number(durationInMs);
	const minutes = Math.floor((duration / (1000 * 60)) % 60);
	const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

	let msg = [];
	if (hours > 0) {
		msg.push(hours);
		msg.push(hours > 1 ? 'hours' : 'hour');
	}

	if (minutes > 0) {
		msg.push(minutes);
		msg.push(minutes > 1 ? 'mins' : 'min');
	}

	if (msg.length > 0) {
		return msg.join(' ');
	} else {
		return 'Unknown duration';
	}
}

export function getLocalTimezone() {
	return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function convertTimeToText(dateStr: string, businessTimeZone: string) {
	const date = new Date(dateStr);
	const d = new Date(date.toLocaleString('en-US', { timeZone: businessTimeZone }));

	let hours = d.getHours();
	let minutes: string | number = d.getMinutes();

	hours = hours % 12 ? hours % 12 : 12;
	minutes = minutes < 10 ? '0' + minutes : minutes;

	return `${hours}:${minutes} ${d.getHours() >= 12 ? 'pm' : 'am'}`;
}
export function convertDateToText(dateStr: string, businessTimeZone: string) {
	const date = new Date(dateStr);
	const d = new Date(date.toLocaleString('en-US', { timeZone: businessTimeZone }));
	const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	const weekday = weekdays[d.getDay()];
	const month = months[d.getMonth()];
	const day = d.getDate();
	const year = d.getFullYear();

	let ordinalIndicator = 'th';
	const lastChar = day.toString().charAt(day.toString().length - 1);

	if (lastChar === '1' && day.toString() !== '11') {
		ordinalIndicator = 'st';
	} else if (lastChar === '2' && day.toString() !== '12') {
		ordinalIndicator = 'nd';
	} else if (lastChar === '3' && day.toString() !== '13') {
		ordinalIndicator = 'rd';
	}

	return `${weekday}, ${month} ${day}${ordinalIndicator}, ${year}`;
}

export function convertMsToMins(duration: any) {
	return Math.round(Number(duration) / 1000 / 60);
}

export function formatDateToParts(current: string, businessTimeZone: string, minutes: number) {
	const currentDate = new Date(
		new Date(current).toLocaleString('en-US', { timeZone: businessTimeZone })
	);
	const futureDate = new Date(currentDate.getTime() + minutes * 60000);

	const currentDateOptions: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	const currentHourOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' };
	const currentDateFormatter = new Intl.DateTimeFormat('en-US', currentDateOptions);
	const currentHourFormatter = new Intl.DateTimeFormat('en-US', currentHourOptions);

	const futureOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' };
	// if is not the same day, show full date for the future date. Otherwise just show time.
	const sameDay = isSameDay(currentDate, futureDate);
	if (!sameDay) {
		futureOptions.weekday = 'long';
		futureOptions.year = 'numeric';
		futureOptions.month = 'long';
		futureOptions.day = 'numeric';
	}

	const futureFormatter = new Intl.DateTimeFormat('en-US', futureOptions);
	return sameDay
		? [
				currentDateFormatter.format(currentDate),
				currentHourFormatter.format(currentDate) + ' - ' + futureFormatter.format(futureDate)
		  ]
		: [
				currentDateFormatter.format(currentDate) + ', ' + currentHourFormatter.format(currentDate),
				' - ',
				futureFormatter.format(futureDate)
		  ];
}

export function isSameDay(date1: Date, date2: Date) {
	return (
		date1.getDate() === date2.getDate() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getFullYear() === date2.getFullYear()
	);
}
