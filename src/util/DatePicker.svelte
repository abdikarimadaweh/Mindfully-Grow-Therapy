<script lang=ts>


import { CalendarView } from "fluent-svelte";
import "fluent-svelte/theme.css";

export let availabilities: string;
export let serviceId: string;
export let serviceVersion: string;
export let bookingId: string;
export let timeZone: string;


//console.log(availabilities)

let selectedDate: any = null;
const currentDate = new Date();
const maxDate = new Date();
maxDate.setDate(currentDate.getDate() + 30);


function formatDateToYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function formatToAmPm(date:any) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours % 12 ? hours % 12 : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes} ${date.getHours() >= 12 ? "pm" : "am"}`;
  }

 function createDateAvailableTimesMap(availabilities: any, businessTimeZone: any) {
    const dateAvailableTimesMap: { [key: string]: any[] } = {};
    availabilities.forEach((availability: any) => {
      // get start date
      const startAtDate = new Date(availability.startAt);
      // convert dates to the business time zone
      const businessTime = new Date(startAtDate.toLocaleString("en-US", { timeZone: businessTimeZone }));
      const month = ("0" + (businessTime.getMonth() + 1)).slice(-2);
      const date = ("0" + businessTime.getDate()).slice(-2);
      const startDate = `${businessTime.getFullYear()}-${month}-${date}`;
      const availableTimes = dateAvailableTimesMap[startDate] || [];
      // add the available times as a value to the date
      availableTimes.push({
        date: availability.startAt, // keep date in same RFC 3339 format so it can be used in createBooking
        teamMemberId: availability.appointmentSegments[0].teamMemberId,
        time: formatToAmPm(businessTime)
      });
      dateAvailableTimesMap[startDate] = availableTimes;
    });
    return dateAvailableTimesMap;
  }

function handleDateChanged(event: any) {
    selectedDate = formatDateToYYYYMMDD(event.detail);
	console.log(selectedDate)
	const availableTimesDiv = document.getElementById("available-times") as HTMLElement;
	availableTimesDiv.innerHTML = "";
	const availabilityArr = createDateAvailableTimesMap(availabilities, timeZone)
	const availabilitiesMap = availabilityArr[selectedDate]
	console.log(availabilitiesMap)
	if (!availabilitiesMap) { // no available times for the date
      const noTimesAvailable = document.createElement("p");
      noTimesAvailable.className = "no-times-available-msg";
      noTimesAvailable.innerHTML = "There are no times available for this date - please select a new date.";
      availableTimesDiv.appendChild(noTimesAvailable);
      return;
    }

	availabilitiesMap.forEach((availability) => {
		const form = document.createElement("form");
		form.action = bookingId ? `/booking/${bookingId}/reschedule?startAt=${availability.date}` : "/book/contact";
      	form.method = bookingId ? "post" : "get";

		if (form.method === "get") {
			const queryParams: Record<string, string> = {
          	serviceId: serviceId,
          	staff: availability.teamMemberId,
          	startAt: availability.date,
          	version: serviceVersion,
        };
        Object.keys(queryParams).forEach(queryParam => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = queryParam;
          input.value = queryParams[queryParam];
          form.appendChild(input);
        });
      }

	  const timeItem = document.createElement("button");
      timeItem.innerHTML = availability.time;
      timeItem.className = "available-time";
      timeItem.type = "submit";
      form.appendChild(timeItem);
      availableTimesDiv.appendChild(form);
	})
  }
	
	
	</script>


<CalendarView on:change={handleDateChanged} value={new Date()}  min={new Date()} max={maxDate} blackout={[new Date(2023, 8, 7), new Date(2023, 8, 9)]}/>



