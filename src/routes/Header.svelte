<script>
    import '@fontsource-variable/arimo';
    import "@fontsource/gilda-display"
</script>

<header>
    <div class="helpBanner">
        <p><strong><u>This is not a crisis service.</u></strong> If you are in <u>crisis</u> please call 911 or the Toronto Distress Line (416-408-4357) or<br> 
            Canada Suicide Prevention Service (1-833-456-4566) or go to your local hospital emergency room.</p>
    </div>
    <nav>
        <ul>
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
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f4f4f4;
        padding: 10px 0 10px 0;
    }
    ul {
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
        height: 35px;
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
            flex-direction: column;
        }

        .menu-icon {
            display: block;
        }

        ul {
            display: none;
            flex-direction: column;
            width: 100%;
        }

        ul.active {
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