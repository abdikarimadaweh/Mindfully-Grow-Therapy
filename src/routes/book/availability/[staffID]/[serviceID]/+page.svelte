<script lang="ts">
	import { onMount } from 'svelte';
    import '../../../style.css';
    import "../../../datepicker.css"
    import flatpickr from "flatpickr";
    import 'flatpickr/dist/flatpickr.min.css';
    import sideCaretSelected from "../../../../../img/side-caret-selected.svg"
    import backArrow from "../../../../../img/back-arrow.svg"
    import DatePicker from '../../../../../util/DatePicker.svelte';
    import {getLocalTimezone, formatTime} from "../../../../../util/funtion-helper"
    
    export let data: any;
    
        let selectedDate = '';

  


</script>

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
      <a class="button" href="/book/staff/{data.serviceID}?version={data.serviceVersion}"><img src={backArrow} alt="Back Arrow">
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
              <a href="/book/staff/{data.serviceID}?version={data.serviceVersion}">Edit</a>
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
              <img src={sideCaretSelected} alt="side-caret-selected">
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
      <div class="availability">
        <h4> Select appointment date </h4>
        <DatePicker 
        availabilities={data.availabilities}
        serviceId={data.serviceID}
        serviceVersion={data.serviceVersion}
        bookingId={undefined}
        timeZone={data.location.timezone}
        />
        <h4> Available Times </h4>
      
        <p> You can schedule an appointment between 4 hours and 30 days ahead of time. </p>
      
        {#if data.location.timezone !== getLocalTimezone()}
          <div class="timezone-warning">
            <span class="notify-icon"> &#9888; </span>
            <span> <b>HEADS UP!</b> It looks like you're in a different timezone. Times below are shown in {location.timezone} time.</span>
          </div>
        {/if}
        
        <div id="available-times">
          <!-- Render your available times here using the datePickerHandler -->
        </div>
      </div>
    </div>
  </div>
  

</body>