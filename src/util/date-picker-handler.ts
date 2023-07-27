class DatePickerHandler {
	private availabilityMap: { [key: string]: any[] };
	private serviceId: string;
	private serviceVersion: string;
	private bookingId: string;

	constructor(
		availabilities: [],
		serviceId: string,
		serviceVersion: string,
		bookingId: string,
		businessTimeZone: string
	) {
		this.availabilityMap = this.createDateAvailableTimesMap(availabilities, businessTimeZone);
		this.serviceId = serviceId;
		this.serviceVersion = serviceVersion;
		this.bookingId = bookingId;
		const now = new Date();
		this.selectNewDate(
			new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().split('T')[0]
		);
	}

	private createDateAvailableTimesMap(
		availabilities: [],
		businessTimeZone: string
	): { [key: string]: any[] } {
		const dateAvailableTimesMap: { [key: string]: any[] } = {};
		availabilities.forEach((availability) => {
			const startAtDate = new Date(availability.startAt);
			const businessTime = new Date(
				startAtDate.toLocaleString('en-US', { timeZone: businessTimeZone })
			);
			const month = ('0' + (businessTime.getMonth() + 1)).slice(-2);
			const date = ('0' + businessTime.getDate()).slice(-2);
			const startDate = `${businessTime.getFullYear()}-${month}-${date}`;
			const availableTimes = dateAvailableTimesMap[startDate] || [];
			availableTimes.push({
				date: availability.startAt,
				teamMemberId: availability.appointmentSegments[0].teamMemberId,
				time: this.formatToAmPm(businessTime)
			});
			dateAvailableTimesMap[startDate] = availableTimes;
		});
		return dateAvailableTimesMap;
	}

	private formatToAmPm(date: Date): string {
		let hours = date.getHours();
		let minutes = date.getMinutes();
		hours = hours % 12 ? hours % 12 : 12;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		return `${hours}:${minutes} ${date.getHours() >= 12 ? 'pm' : 'am'}`;
	}

	public selectNewDate(date: string): void {
		const availableTimesDiv = document.getElementById('available-times');
		availableTimesDiv.innerHTML = '';
		const availabilities = this.availabilityMap[date];
		if (!availabilities) {
			const noTimesAvailable = document.createElement('p');
			noTimesAvailable.className = 'no-times-available-msg';
			noTimesAvailable.innerHTML =
				'There are no times available for this date - please select a new date.';
			availableTimesDiv.appendChild(noTimesAvailable);
			return;
		}
		availabilities.forEach((availability) => {
			const form = document.createElement('form');
			form.action = this.bookingId
				? `/booking/${this.bookingId}/reschedule?startAt=${availability.date}`
				: '/contact';
			form.method = this.bookingId ? 'post' : 'get';
			if (form.method === 'get') {
				const queryParams = {
					serviceId: this.serviceId,
					staff: availability.teamMemberId,
					startAt: availability.date,
					version: this.serviceVersion
				};
				Object.keys(queryParams).forEach((queryParam) => {
					const input = document.createElement('input');
					input.type = 'hidden';
					input.name = queryParam;
					input.value = queryParams[queryParam];
					form.appendChild(input);
				});
			}
			const timeItem = document.createElement('button');
			timeItem.innerHTML = availability.time;
			timeItem.className = 'available-time';
			timeItem.type = 'submit';
			form.appendChild(timeItem);
			availableTimesDiv.appendChild(form);
		});
	}

	private formatDate(date: string): string {
		const d = new Date(date);
		let month = '' + (d.getMonth() + 1);
		let day = '' + d.getDate();
		const year = d.getFullYear();

		if (month.length < 2) {
			month = '0' + month;
		}
		if (day.length < 2) {
			day = '0' + day;
		}

		return [year, month, day].join('-');
	}

	public isSelectable(date: string): [boolean] {
		const now = new Date();
		const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
			.toISOString()
			.split('T')[0];
		const formattedDate = this.formatDate(date);
		return [this.availabilityMap[formattedDate] || formattedDate === today];
	}
}
