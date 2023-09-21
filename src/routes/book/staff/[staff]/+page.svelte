<script lang="ts">
	import { onMount } from 'svelte';
  import '../../style.css';
  import backArrow from "../../../../img/back-arrow.svg"
  import sideCaretSelected from "../../../../img/side-caret-selected.svg"
  import iconPlus from "../../../../img/plus.svg"
	import { formatTime, getStaffInitials } from '../../../../util/funtion-helper';
  
  export let data: any;



  onMount(async () => {
    console.log(data)
    console.log("hello")
  })


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
      <a class="button" href="/book/services"><img src={backArrow} alt="Back Arrow"> Back</a>
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
              <img src={sideCaretSelected} alt="side-caret-selected">
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
              <img src={iconPlus} alt="Plus Icon">
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
              <img src={iconPlus} alt="Plus Icon">
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
