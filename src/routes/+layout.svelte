<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import { onMount } from 'svelte';
  import { page } from '$app/stores';


    const updateBackgroundColor = (path) => {
        if (path === '/startingTherapy') {
            document.body.style.backgroundColor = '#c2d0dd';
        } else {
            document.body.style.backgroundColor = '#f4f4f4';
        }
    };

    onMount(() => {
        updateBackgroundColor(window.location.pathname);
    });
    $: {
        $page; 
        if (typeof window !== 'undefined') {
            updateBackgroundColor($page.route.id);
        }
    }
	
</script>


<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>