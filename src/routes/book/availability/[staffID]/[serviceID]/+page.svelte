
<script lang="ts">
	import { onMount } from 'svelte';
    import '../../../style.css';
    import "../../../datepicker.css"
    import flatpickr from "flatpickr";
    
    export let data: any;


    
  let datePicker;
  let availabilities = data.availabilities;
  let serviceId = data.serviceID;
  //let bookingId = "<%- locals.bookingId %>";
  let timezone = data.location.timezone

  class DatePickerHandler {
    private availabilityMap: { [key: string]: { date: string; teamMemberId: string; time: string }[] };
  private serviceId: string;
  private serviceVersion: string;
  private bookingId: string | undefined;

  constructor(availabilities: Availability[], serviceId: string, serviceVersion: string, bookingId: string | undefined, businessTimeZone: string) {
    this.availabilityMap = this.createDateAvailableTimesMap(availabilities, businessTimeZone);
    this.serviceId = serviceId;
    this.serviceVersion = serviceVersion;
    this.bookingId = bookingId;

    // show the available times for today's date
    const now = new Date();
    this.selectNewDate(new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().split("T")[0]);
  }

  /**
   * Return a mapping of the availabilities array
   * to enable easy lookup of available times for a date on the client side
   * @param {Availability[]} availabilities
   * @param {String} businessTimeZone IANA timezone of the business
   * @return {Object<String, Object[]>} map where keys are the dates and values are
   * objects that contain the time, the team member id available and
   * the date in RFC 3339 format
   * All dates & times returned are converted to the time zone passed in
   * (business time zone)
   *
   * Ex. If availabilities is:
   * [
      {
        startAt: "2021-11-26T13:00:00Z",
        locationId: "location-id",
        appointmentSegments: [
          {
            durationMinutes: 30,
            teamMemberId: "team-id-1",
            serviceVariationId: "service-id",
            serviceVariationVersion: 1234
          }
        ]
      },
      {
        startAt: "2021-11-26T21:00:00Z",
        locationId: "location-id",
        appointmentSegments: [
          {
            durationMinutes: 30,
            teamMemberId: "team-id-2",
            serviceVariationId: "service-id",
            serviceVariationVersion: 1234
          }
        ]
      },
      {
        startAt "2021-11-30T12:30:00Z",
        locationId: "location-id",
        appointmentSegments: [
          {
            durationMinutes: 30,
            teamMemberId: "team-id-2",
            serviceVariationId: "service-id",
            serviceVariationVersion: 1234
          }
        ]
      }
    ]
    Then the object returned is (if local timezone is UTC-7 hours):
    {
      "2021-11-26": [
        {
          date: "2021-11-26T13:00:00Z",
          teamMemberId: "team-id-1",
          time: "6:00 am"
        },
        {
          date: "2021-11-26T21:00:00Z",
          teamMemberId: "team-id-2",
          time: "2:00 pm"
        }
      ],
      "2021-11-30": [
        {
          date: "2021-11-30T12:30:00Z",
          teamMemberId: "team-id-2",
          time: "5:30 am"
        }
      ]
    }
  */
  createDateAvailableTimesMap(availabilities, businessTimeZone) {
    const dateAvailableTimesMap = {};
    availabilities.forEach((availability) => {
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
        time: this.formatToAmPm(businessTime)
      });
      dateAvailableTimesMap[startDate] = availableTimes;
    });
    return dateAvailableTimesMap;
  }

  /**
   * Reformat time to 12 hour am/pm format
   * @param {Date} date in business's time zone
   * @return {String} time in 12 hour format with am/pm
   */
  formatToAmPm(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours % 12 ? hours % 12 : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes} ${date.getHours() >= 12 ? "pm" : "am"}`;
  }

  /**
   * Handler for when a date is selected on the datepicker widget
   * Show the available times for that date
   * @param {String} date ie. 2021-10-30
   */
  selectNewDate(date) {
    const availableTimesDiv = document.getElementById("available-times");
    // clear available times and reset it to the new available times for the date
    availableTimesDiv.innerHTML = "";
    const availabities = this.availabilityMap[date];
    if (!availabities) { // no available times for the date
      const noTimesAvailable = document.createElement("p");
      noTimesAvailable.className = "no-times-available-msg";
      noTimesAvailable.innerHTML = "There are no times available for this date - please select a new date.";
      availableTimesDiv.appendChild(noTimesAvailable);
      return;
    }
    // for each available time create a new element that directs user to the next step in booking
    // or reschedules the booking if it's an existing booking
    availabities.forEach((availability) => {
      const form = document.createElement("form");
      form.action = this.bookingId ? `/booking/${this.bookingId}/reschedule?startAt=${availability.date}` : "/contact";
      form.method = this.bookingId ? "post" : "get";
      // create hidden parameters for GET contact action
      if (form.method === "get") {
        const queryParams = {
          serviceId: this.serviceId,
          staff: availability.teamMemberId,
          startAt: availability.date,
          version: this.serviceVersion,
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
    });
  }

  /**
   * Format date to yyyy-mm-dd format
   * @param {String} date
   * @returns {String}
   */
  formatDate(date) {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }

    return [ year, month, day ].join("-");
  }

  /**
   * Determines whether a date is selectable or not
   * @param {String} date
   * @returns {Boolean[]} where first item indicates whether the date is selectable
   */
  isSelectable(date) {
    const now = new Date();
    const today = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString().split("T")[0];
    const formattedDate = this.formatDate(date);
    // let date be selectable if there's availabilities for the date or if the date is today
    return [ this.availabilityMap[formattedDate] || formattedDate === today ];
  }
}


  const datePickerHandler = new DatePickerHandler(availabilities, serviceId, serviceVersion, bookingId, timezone);

  onMount(() => {
    flatpickr(datePicker, {
      minDate: "today",
      maxDate: new Date().fp_incr(30), // Add 30 days to today's date
      dateFormat: "Y-m-d",
      onChange: function (selectedDates, dateStr) {
        datePickerHandler.selectNewDate(dateStr);
      },
      // Add other configurations here if needed
    });
  });



  function formatTime(durationInMs: any) {

    const duration = Number(durationInMs);
  const minutes = Math.floor(duration / (1000 * 60) % 60);
  const hours = Math.floor(duration / (1000 * 60 * 60) % 24);

  let msg = [];
  if (hours > 0) {
    msg.push(hours);
    msg.push((hours > 1) ? "hours" : "hour");
  }

  if (minutes > 0) {
    msg.push(minutes);
    msg.push((minutes > 1) ? "mins" : "min");
  }

  if (msg.length > 0) {
    return msg.join(" ");
  } else {
    return "Unknown duration"
  }

  }

  function formatMoney(value: any, currency: any) {
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
  if (currency !== "JPY") {
    valueAsNumber /= 100.0;
  }
  const formatter = new Intl.NumberFormat('en-US', props);
  return formatter.format(valueAsNumber);
    
  }
  function getStaffInitials(displayName: any) {
  return displayName.toUpperCase()[0];
}

  function getLocalTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}


</script>

<head>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script src="../../../../../util/data-picker-handler.ts"></script>
</head>
<body>

<header>
    <div class="top-nav">
      <div class="top-nav__logo">
        <a href="/book/services">
          {#if (data.location.logoUrl)}
          <img src="{data.location.logoUrl}" alt="LogoImages">
          {:else}
          <img src="/images/blank-logo-sm.svg" alt="LogoImage">
          {/if}
        </a>
    </div>
    <div class="top-nav__name">
      <a href="/book/services">
        {data.location.businessName || data.location.name}
      </a>
    </div>
  </div>
  </header>

  <div class="content">
    <div class="content-left">
      <a class="button" href="/book/staff/{data.serviceID}"><span class="icon back-arrow"></span> Back</a>
      <div class="steps">
        <div class="steps__step">
          <div class="steps__step-wrapper">
            <div class="steps__step-title">
              <span>Services</span>
              <a href="/book/services">Edit</a>
            </div>
            <div class="steps__step-body">
              <div class="steps__step-name">
                {data.serviceItem.itemData.name}
              </div>
              <div class="steps__step-description">
                {formatTime(data.serviceVariation.itemVariationData.serviceDuration)}
              </div>
            </div>
          </div>
        </div>
        <div class="steps__step">
          <div class="steps__step-wrapper">
            <div class="steps__step-title">
              <span>Select staff</span>
              <a href="/book/staff/{data.serviceID}">Edit</a>
            </div>
            <div class="availability-staff__card-wrapper">
              <div class="staff__card-picture-wrapper">
                  <img src="{data.bookingProfile.profileImageUrl}" alt="profileIMG" />
              </div>
              <div class="steps__staff-step-body">
                <div class="steps__step-name">
                    {data.bookingProfile.displayName}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="steps__step selected">
          <div class="steps__step-wrapper">
            <div class="steps__step-title">
              <span>Appointment time</span>
              <span class="icon side-caret-selected"></span>
            </div>
          </div>
        </div>
        <div class="steps__step">
          <div class="steps__step-wrapper">
            <div class="steps__step-title">
              <span>Enter your details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-main">
      <script>
        import { onMount } from "svelte";
      
        let datePicker;
        let availabilities = JSON.parse('<%- stringifyJSON(availabilities) %>');
        let serviceId = "<%- serviceId %>";
        let serviceVersion = "<%- serviceVersion %>";
        let bookingId = "<%- locals.bookingId %>";
        let timezone = "<%- location.timezone %>";
      
        const datePickerHandler = {
          isSelectable: (date) => {
            // Implement your custom logic for date selection
            return true;
          },
          selectNewDate: (date) => {
            // Implement your custom logic for handling the selected date
            console.log("Selected date:", date);
          },
        };
      
        onMount(() => {
          flatpickr(datePicker, {
            minDate: "today",
            maxDate: new Date().fp_incr(30), // Add 30 days to today's date
            dateFormat: "Y-m-d",
            onChange: function (selectedDates, dateStr) {
              datePickerHandler.selectNewDate(dateStr);
            },
            // Add other configurations here if needed
          });
        });
      </script>
      
      <div class="availability">
        <h4> Select appointment date </h4>
        <input type="text" bind:this={datePicker} placeholder="Select a date">
        <h4> Available Times </h4>
      
        <p> You can schedule an appointment between 4 hours and 30 days ahead of time. </p>
      
        {#if getLocalTimezone() !== data.locaton.timezone}
          <div class="timezone-warning">
            <span class="notify-icon"> &#9888; </span>
            <span> <b>HEADS UP!</b> It looks like you're in a different timezone. Times below are shown in {data.location.timezone} time.</span>
          </div>
        {/if}
        
        <div id="available-times">
          <!-- Render available times here -->
        </div>
      </div>
    </div>
  </div>
  

</body>