<script>
    import PsychologyTodayBadge from './PsychologyTodayBadge.svelte';
    import header from "../img/header.png"
    import SocialIcons from '@rodneylab/svelte-social-icons';
    import Icon from '@iconify/svelte';
    import "@fontsource/gilda-display"
    import "@fontsource/inter"
  </script>



<div class="footer">
    <div class="footer_psyToday">
        <PsychologyTodayBadge />
    </div>

    <div class="footer_logo">
        <img class="logoImg" src={header}  alt="temp" />
    </div>

    <div class="footer_links">
        <div class="footer_links_pages">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/startingTherapy">Starting Therapy</a>
                </li>
                <li>
                    <a href="/book">Book</a>
                </li>
                <li>
                    <a href="/qualifications">Qualifications</a>
                </li>
                <li>
                    <a href="/aboutMe">About Me</a>
                </li>
                <li>
                    <a href="/resources">Resources</a>
                </li>
            </ul>
        </div>
        <div class="footer_links_social">
            <SocialIcons alt="" network="instagram" width="40" height="40" fgColor="#4d4b44" bgColor="transparent" />
            <SocialIcons alt="" network="twitter" width="40" height="40" fgColor="#4d4b44" bgColor="transparent" />
            <SocialIcons alt="" network="facebook" width= "40" height="40" fgColor="#4d4b44" bgColor="transparent" />
            <SocialIcons alt="" network="linkedin" width="40" height="40" fgColor="#4d4b44" bgColor="transparent" />
        </div>
    </div>
    <hr class="divider" />
    <div class="footer_paymentOptions">
        <Icon style="margin: 0px 8px 0px 8px;" icon="logos:apple-pay" />
        <Icon style="margin: 0px 8px 0px 8px;" icon="logos:google-pay" />
        <Icon style="margin: 0px 8px 0px 8px;" icon="logos:visa" />
        <Icon style="margin: 0px 8px 0px 8px;" icon="logos:mastercard" />
        <Icon style="margin: 0px 8px 0px 8px;" icon="logos:amex" />
        <Icon style="margin: 0px 8px 0px 8px;" icon="logos:discover" />
    </div>
    <div class="footer_copyright">
        <p>© 2023</p>
    </div>
</div>

<style>
    .footer {
        display: flex;
        flex-direction: column;
        padding: 20px 50px 20px 50px;
    }
    .footer_psyToday{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
    }
    .divider {
        color: black;
        width: 100%;
        height: 0px;
    }
    ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        list-style: none;
        margin: 0;
    }
    li {
        display: flex;
        justify-content: center;
        width: 130px;
        text-align: center;
    }
    li a {
        text-decoration: none;
        color: black;
        font-family: "inter", serif;
        font-weight: 300;
        font-size: 15px;
    }
    .footer_links_social {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 5px;
    }

    .footer_paymentOptions {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 5px;
    }
    .logoImg {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: auto;
        max-width: 200px;
        margin-bottom: 20px;
    }
    @media (max-width: 768px) {
        .footer_links {
            flex-direction: column;
            align-items: center;
        }

        .footer_links_pages,
        .footer_links_social {
            flex: none;
            min-width: auto;
        }

        ul {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }

        li {
            margin: 5px 10px;
        }
    }

    @media (max-width: 480px) {
        .footer_paymentOptions {
            flex-direction: column;
        }

        .footer_paymentOptions > * {
            margin: 5px 0;
        }

        .divider {
            margin: 10px 0;
        }

        .footer_links_pages ul {
            flex-direction: column;
            align-items: center;
        }

        li {
            width: auto;
            margin-bottom: 10px;
        }
    }
</style>