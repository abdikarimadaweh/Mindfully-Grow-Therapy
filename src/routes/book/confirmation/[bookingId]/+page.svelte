<script lang="ts">
	import { formatDateToParts, getStaffInitials } from "../../../../util/funtion-helper";

    export let data: any;
</script>

<head>
  <link href="/stylesheets/style.css" rel="stylesheet" type="text/css">
</head>

<body>
    <header>
        <div class="top-nav">
          <div class="top-nav__logo">
            <a href="/book/services">
              {#if (data.location.logoUrl)}
              <img src="{data.location.logoUrl}" alt="LogoImages">
              {:else}
              <img src="../images/blank-logo-sm.svg" alt="LogoImage">
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
  <div class="container">
    <div class="content__service message">
      <h3> Thank you for booking with us </h3>
      <div class="content__service message-sm">
        <span> Your appointment has been approved.</span>
      </div>
      <div class="content__card">
        <div class="content__card-wrapper">
          <div>
            <div class="staff__card-wrapper confirm">
              <div class="staff__card-picture-wrapper">
                {#if data.teamMemberBookingProfile && data.teamMemberBookingProfile.profileImageUrl}
                  <img src="{data.teamMemberBookingProfile.profileImageUrl}" alt="teamMemberPic"/>
                {:else if data.teamMemberBookingProfile}
                  {getStaffInitials(data.teamMemberBookingProfile.displayName)}
                {/if}
              </div>
              <div class="staff__card-details--confirm">
                <span class="message-sm">Scheduled with</span>
                <h4>{data.teamMemberBookingProfile.displayName}</h4>
              </div>
            </div>
          </div>
          <div class="content__card-date">
            <h5>
              {#each formatDateToParts(data.booking.startAt, data.location.timezone, data.booking.appointmentSegments[0].durationMinutes) as part}
                {part}<br>
              {/each}
            </h5>
          </div>
          <div class="content__card-description">
            <span>{data.serviceItem.itemData.name} - {data.serviceVariation.itemVariationData.name}</span>
          </div>
          <div class="business__location">
            <div>
              {#if data.location.address}
                {#if data.location.address.addressLine1}
                  <span>{data.location.address.addressLine1}, </span><br>
                {/if}
                {#if data.location.address.addressLine2}
                  <span>{data.location.address.addressLine2}, </span>
                {/if}
                <span>
                  {data.location.address.locality},
                  {data.location.address.administrativeDistrictLevel1},
                  {data.location.address.postalCode}
                </span>
              {:else}
                <span>No location information</span>
              {/if}
            </div>
          </div>
          <div class="button__group">
            <form class="sq-form-control" action="/api/reschedule" method="GET">
              <button class="button btn-primary" type="submit"> Reschedule booking </button>
            </form>
            <form class="sq-form-control" action="/api/delete" method="POST">
              <button class="button btn-secondary" type="submit">Cancel booking</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
