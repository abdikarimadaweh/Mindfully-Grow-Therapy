<script>
    import Self from "../../img/Self.png"
    import SocialIcons from '@rodneylab/svelte-social-icons';
    import "@fontsource/gilda-display"
    import "@fontsource/inter"
    import Blue from "../../img/Blue_Lotus_Blue.png"
</script>

<div class="aboutMe">
    <div class="aboutMe_info">
        <div class="aboutMe_info_image">
            <img src={Self} alt="Thusa Maheswaran" />
        </div>
        
    </div>
    <div class="aboutMe_details">
        <h1>Starting Therapy</h1>
        <p>My approach when working with individuals is to provide a safe and supportive space while working in a collaborative environment. In my practice I ensure that we are engaging in insightful and compassionate conversations to help individuals make meaningful changes in their lives.
            <br> <br>

            It is my practice and belief as a therapist, that we can all benefit from learning new skills, tools and/or coping skills. Whether it is developing healthier coping strategies to deal with intense emotions and distressing thoughts, or develop more fulfilling interpersonal relationships. <br> <br> <br>
            </p>
            <div class="aboutMe_details_image">
                <img src={Blue} alt="BLUE LOGO" />
            </div>
    </div>
</div>


<style>
    .aboutMe {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: #c2d0dd;
        padding: 40px 0 40px 0;

    }
    .aboutMe_info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-right: 200px;
    }
    .aboutMe_info_image {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .aboutMe_info_image img {
        margin: auto;
        width: 100%;
        height: auto;
        max-height: 970px;
        max-width: 550px;
        object-fit: cover;
        object-position: center top;
    }
    .aboutMe_details {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        max-width: 600px;
    }

    .aboutMe_details h1 {
        font-family: "Gilda Display", serif;
        font-size: 50px;
        font-weight: 300;
        color: #4d4b44;

    }
    .aboutMe_details p {
        margin: auto;
        font-family: "Inter", sans-serif;
        font-size: 18px ;
        color: #4d4b44;
    }
    .aboutMe_details_image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .aboutMe_details_image img {
        width: 100%;
        height: auto;
        max-height: 270px;
        max-width: 250px;
        object-fit: cover;
        object-position: center top;


    }
</style>