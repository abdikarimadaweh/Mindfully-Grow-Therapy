<script lang="ts">
    import '@fontsource-variable/arimo';
    import "@fontsource/gilda-display"
     import header from "../img/header.png"
	import { onMount } from 'svelte';

    onMount(() => {
        const mobileHamburger = document.getElementById('mobileHamburger') as HTMLElement;
        const closeMobileMenu = document.querySelector('.closeMobileMenu') as HTMLElement;
        const menuLinks = document.querySelectorAll('.menuLink') as NodeListOf<HTMLElement>;
        const logo = document.querySelector('.logo') as HTMLElement;
        menuLinks.forEach((link) => {
            link.addEventListener('click', () => {
                toggleMenu(false);
            });
        });
        logo.addEventListener('click', () => {
            toggleMenu(false);
        });
        mobileHamburger.addEventListener('click', () => {
            //mobileHamburger.style.display = 'none';
            console.log('clicked');
            toggleMenu();
        });
        closeMobileMenu.addEventListener('click', () => {
            toggleMenu(false);
        });
    });

    function toggleMenu(showMenu: boolean = true) {
        const mobileHamburger = document.getElementById('mobileHamburger') as HTMLElement;
        const navList = document.querySelector('.menuContainer') as HTMLElement;
        const menuContainer = document.querySelector('.menuContainer') as HTMLElement;
        const closeMobileMenu = document.querySelector('.closeMobileMenu') as HTMLElement;
        const logo = document.querySelector('.logo') as HTMLElement;
        if(!showMenu) {
            navList.style.display = 'none';
            mobileHamburger.style.display = 'block'; 
            return;
        } else {
            //mobileHamburger.style.display = 'none';
            navList.classList.add('active');
            navList.style.display = 'flex';
        
        }
    }
</script>

<header>
    <div class="helpBanner">
        <p><strong><u>This is not a crisis service.</u></strong> If you are in <u>crisis</u> please call 911 or the Toronto Distress Line (416-408-4357) or<br> 
            Canada Suicide Prevention Service (1-833-456-4566) or go to your local hospital emergency room.</p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        id="mobileHamburger">
        <path fill-rule="evenodd"
        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
        clip-rule="evenodd"></path>
    </svg>
    
    <div class="menuContainer">
        <div class="mobileNavHeader">
            <div class="logo">
                <a href="/"><img class="logoImg" src={header}  alt="temp" /></a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="closeMobileMenu">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </div>
        <div class="mobileNavLinks">
            <a class="menuLink" href="/startingTherapy">Starting Therapy</a>
            <a class="menuLink" href="/aboutMe">About Me</a>
            <a class="menuLink" href="/qualifications">Qualifications</a>
            <a class="menuLink" href="/resources">Resources</a>
            <a class="menuLink" href="/contact">Contact</a>
            <a href="https://book.squareup.com/appointments/dthttv7mhfv5tw/location/L7KYHVRCWWQHB/services?buttonTextColor=ffffff&color=4058c5&locale=en&referrer=so" class="bookBtn">Book Now</a>
        </div>
    </div>
    <nav>
        <ul class="navElems">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/startingTherapy">Starting Therapy</a>
            </li>
            <li>
                <a href="/aboutMe">About Me</a>
            </li>
            <li>
                <a href="/qualifications">Qualifications</a>
            </li>
            <li>
                <a href="/resources">Resources</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
            <li>
                <a href="https://book.squareup.com/appointments/dthttv7mhfv5tw/location/L7KYHVRCWWQHB/services?buttonTextColor=ffffff&color=4058c5&locale=en&referrer=so">Book</a>
            </li>
        </ul>
    </nav>
</header>


<style>
    header {
        display: flex;
        flex-direction: column;
    }
    .helpBanner {
        background-color: #ffe2e2;
        text-align: center;
        font-size: 16px;
        width: 100%;
        font-family: 'Arimo Variable', sans-serif;

    }

    #mobileHamburger {
        width: 40px;
        cursor: pointer;
        padding: 10px 15px;
        display: none;
    }

    .closeMobileMenu {
        width: 40px;
        cursor: pointer;
        padding: 10px 15px;
        position: absolute;
        right: 0;
        top: 20px;
    }

    .menuContainer {
        background-color: #f4f4f4;
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 999;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
        transition: right 0.3s ease;
    }
    .menuContainer.active {
        right: 0;
    }

    .mobileNavHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px 0;
    }
    .mobileNavLinks {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .menuLink {
        width: 100%;
        padding: 30px 0;
        border-top: 1px solid #5b7792;
        font-family: 'Open Sans Variable', sans-serif;
        font-size: 14px;
        color: black;
        text-decoration: none;
    }

    .logo {
        
        cursor: pointer;
    }
    .logo img {
        width: 120px;
        height: 120px;
    }
    .bookBtn {
        width: 100%;
        padding: 30px 0;
        background-color: #5b7792;
        color: #f4f4f4;
        font-family: 'Open Sans Variable', sans-serif;
        font-size: 14px;
        border: none;
        cursor: pointer;
        text-decoration: none
    }
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0 10px 0;
    }
    .navElems {
        padding: 0;
    margin: 0;
    display: flex; 
    list-style: none;  
    }
    li {
        display: flex;
        justify-content: center;
        margin: 0 25px 0 25px;
        border-radius: 5px;
        width: 90px;
        height: 40px;
        background-color: #5b7792;
        text-align: center;
        padding: 0 10px 0 10px;
    }
    li a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #f4f4f4;
        font-family: "Gilda Display", serif;
        font-size: 14px;
    }

    /* Responsive styles */
    @media (max-width: 768px) {
        nav {
            display: none;
        }

        .menu-icon {
            display: block;
        }

        .navElems {
            display: none;
            flex-direction: column;
            width: 100%;
        }

        .navElems.active {
            display: flex;
        }

        li {
            width: 100%;
            margin: 5px 0;
        }

        .helpBanner {
            font-size: 14px;
            padding: 10px 5px;
        }

        #mobileHamburger {
            display: block;
        }
    }

    @media (max-width: 480px) {
        .helpBanner {
            font-size: 12px;
        }

        li {
            height: auto;
            padding: 10px 0;
        }

        li a {
            padding: 10px;
        }
    }

</style>