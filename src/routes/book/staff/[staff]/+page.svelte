<script lang="ts">
	import { onMount } from 'svelte';
  import '../../style.css';
  
  export let data: any;



  onMount(async () => {
    console.log(data)
    console.log("hello")
  })

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
      <a class="button" href="/book/services"><span class="icon back-arrow"></span> Back</a>
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
        <div class="steps__step selected">
          <div class="steps__step-wrapper">
            <div class="steps__step-title">
              <span>Select staff</span>
              <span class="icon side-caret-selected"></span>
            </div>
          </div>
        </div>
        <div class="steps__step">
          <div class="steps__step-wrapper">
            <div class="steps__step-title">
              <span>Appointment time</span>
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
      <h4>Select a staff member</h4>
      <div class="staff">
        {#if data.bookableStaff.length > 0}
          <a href="/book/availability/anyStaffMember/{data.serviceVariation.id}?version={data.serviceVersion}">
            <div class="staff__card">
              <div class="staff__card-wrapper">
                <div class="staff__card-picture" id="any-staff">
                  <div class="staff__card-picture-wrapper" id="image-1">
                    {#if data.bookableStaff[0].profileImageUrl}
                      <img src="{data.bookableStaff[0].profileImageUrl}" alt="profileIMG" />
                    {:else}
                      {getStaffInitials(data.bookableStaff[0].displayName)}
                    {/if}
                  </div>
                  <div class="staff__card-picture-wrapper" id="image-2">
                    {#if data.bookableStaff.length >= 2}
                      {#if data.bookableStaff[1].profileImageUrl}
                        <img src="{data.bookableStaff[1].profileImageUrl}" alt="profileIMG" />
                      {:else}
                        {getStaffInitials(data.bookableStaff[1].displayName)}
                      {/if}
                    {:else}
                      {getStaffInitials("any")}
                    {/if}
                  </div>
                </div>
                <div class="staff__card-details">
                  <div class="staff__card-name">Any available staff member</div>
                  <div class="staff__card-description">
                    Looking for the first available appointment? Choose this option to find the first available appointment.
                  </div>
                </div>
              </div>
              <span class="icon plus"></span>
            </div>
          </a>
        {/if}
  
        {#each data.bookableStaff as staff}
          <a href="/book/availability/{staff.teamMemberId}/{data.serviceVariation.id}?version={data.serviceVersion}">
            <div class="staff__card">
              <div class="staff__card-wrapper">
                <div class="staff__card-picture">
                  <div class="staff__card-picture-wrapper">
                    {#if staff.profileImageUrl}
                      <img src="{staff.profileImageUrl}" alt="profileIMG" />
                    {:else}
                      {getStaffInitials(staff.displayName)}
                    {/if}
                  </div>
                </div>
                <div class="staff__card-details">
                  <div class="staff__card-name">{staff.displayName}</div>
                  <div class="staff__card-description">{staff.description || "No description."}</div>
                </div>
              </div>
              <span class="icon plus"></span>
            </div>
          </a>
        {/each}
        {#if !data.bookableStaff.length}
          <div class="card__wrapper disabled"></div>
        {/if}
      </div>
    </div>
  </div>
  
</body>
