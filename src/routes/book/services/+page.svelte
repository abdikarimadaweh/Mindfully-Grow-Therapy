
<script lang="ts">
	import { onMount } from 'svelte';
  import '../style.css';
  import  sideCart  from "../../../img/side-caret.svg"
  
  export let data: any;



  onMount(async () => {
    console.log(data)
    console.log(data.location.logoUrl)
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
    <div class="content-left business">
      <div class="business__logo">
        {#if (data.location.logoUrl)}
          <img src="{ data.location.logoUrl}" alt="LogoImage">
           {:else} 
           <img src="/images/blank-logo.svg" alt="LogoImage">
        {/if}
      </div>
      <h3>
        { data.location.businessName || data.location.name }
      </h3>

      {#if (data.location.description)} 
        <h5> {data.location.description} </h5>
      {/if}
      <div class="business__location">
        <h4>Location</h4>
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
      <div class="business__contact">
        <h4>Contact</h4>
        {#if data.location.phoneNumber || data.location.businessEmail}
          {#if data.location.businessEmail}
            Email: <span>{data.location.businessEmail}</span><br>
          {/if}
          {#if data.location.phoneNumber}
            Phone: <span>{data.location.phoneNumber}</span>
          {/if}
        {:else}
          <span>No contact information</span>
        {/if}
      </div>
      
      
      </div>
      <div class="content-main services">
        <h4>Book an appointment</h4>
        <h4 class="title">Services</h4>
        <h4 class="underline"></h4>
        <div class="cards">
          {#each data.items as item}
            {#each item.itemData.variations as variation}
              <a href="/book/staff/{variation.id}?version={variation.version}">
                <div class="card__wrapper">
                  <div class="card__info">
                    <h4>{item.itemData.name} - {variation.itemVariationData.name}</h4>
                    <!-- <h5 class="card__description">{item.itemData.description}</h5> -->
                    <span class="card__details">
                      {#if variation.itemVariationData.pricingType === "FIXED_PRICING"}
                        {formatMoney(variation.itemVariationData.priceMoney.amount, variation.itemVariationData.priceMoney.currency)}
                      {:else}
                        Price Varies
                      {/if}
                      • {formatTime(variation.itemVariationData.serviceDuration)}
                    </span>
                  </div>
                  <span class="card__icon"></span>
                  <img src={sideCart} alt="Side Caret">
                </div>
              </a>
            {/each}
          {/each}
          {#if data.items.length === 0}
            <div class="card__wrapper disabled"></div>
          {/if}
        </div>
      </div>
  </div>
</body>
