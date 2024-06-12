<script lang="ts">
	import { convertDateToText, convertTimeToText, formatTime, getStaffInitials } from '../../../util/funtion-helper';
    import '../style.css';
    import sideCart from "../../../img/side-caret-selected.svg"
    import backArrow from "../../../img/back-arrow.svg"




    export let data: any;

    async function handleSubmit(event: any) {
    event.preventDefault();
    const formEl = event.target as HTMLFormElement
    const dataF = new FormData(formEl)

    console.log(dataF)


    // You can inspect formData here to ensure it contains the form data
    // Send the data to the server using fetch or another method
    const response = await fetch(`/booking?serviceId=${data.serviceVariation.id}&staffId=${data.teamMemberBookingProfile.teamMemberId}&version=${data.serviceVersion}&startAt=${data.startAt}`, {
      method: 'POST',
      body: dataF,
    }) 
    if(response.ok) {
      const responseData = await response.json()
      console.log(responseData.body)
    }
  }

</script>


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

  <div class="content">
    <div class="content-left">
      <a class="button" href="/book/availability/{data.teamMemberBookingProfile.teamMemberId}/{data.serviceVariation.id}?version={data.serviceVersion}"><img src={backArrow} alt="Back Arrow"> Back</a>
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
              <a href="/book/staff/{data.serviceVariation.id}?version={data.serviceVersion}">Edit</a>
            </div>
            <div class="availability-staff__card-wrapper">
              <div class="staff__card-picture-wrapper">
                {#if data.teamMemberBookingProfile.profileImageUrl}
                  <img src="{data.teamMemberBookingProfile.profileImageUrl}" alt="Profile Img" />
                {:else}
                  {getStaffInitials(data.teamMemberBookingProfile.displayName)}
                {/if}
              </div>
              <div class="steps__staff-step-body">
                <div class="steps__step-name">
                  {data.teamMemberBookingProfile.displayName}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="steps__step">
          <div class="steps__step-wrapper">
            <div class="steps__step-title">
              <span>Appointment time</span>
              <a href="/book/availability/{data.teamMemberBookingProfile.teamMemberId}/{data.serviceVariation.id}?version={data.serviceVersion}">Edit</a>
            </div>
            <div class="steps__step-body">
              <div class="steps__step-name">
                {convertDateToText(data.startAt, data.location.timezone)}
              </div>
              <div class="steps__step-description">
                {convertTimeToText(data.startAt, data.location.timezone)}
              </div>
            </div>
          </div>
        </div>
        <div class="steps__step selected">
          <div class="steps__step-wrapper">
            <div class="steps__step-title">
              <span>Enter your details</span>
              <img src={sideCart} alt="Side Caret">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-main">
      <h4>Enter your details</h4>
      <form class="sq-form-control contact-form" method="POST" on:submit={handleSubmit}>
        <input class="half-width" type="text" name="givenName" required maxlength="50" placeholder="First name"  />
        <input class="half-width" type="text" name="familyName" required maxlength="50" placeholder="Last name"  />
        <input class="half-width" name="emailAddress" required maxlength="320" placeholder="Email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]" title="Invalid email address"  />
        <textarea name="customerNote" placeholder="Appointment notes (optional)" maxlength="1500" rows="5" ></textarea>

        <button class="button btn-primary" type="submit">Book appointment</button>
      </form>
    </div>
  </div>
</body>

