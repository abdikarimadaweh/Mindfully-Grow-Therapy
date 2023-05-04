<script>
    import Self from "../../img/Self.png"
    import SocialIcons from '@rodneylab/svelte-social-icons';
    import "@fontsource/gilda-display"
    import "@fontsource/inter"
</script>

<div class="aboutMe">
    <div class="aboutMe_info">
        <div class="aboutMe_info_image">
            <img src={Self} alt="Thusa Maheswaran" />
        </div>
        <div class="aboutMe_info_name">
            <h1>Thusa Maheswaran (she/her)</h1>
            <h3>Registered Social Worker | Psychotherapist</h3>
        </div>
        <div class="aboutMe_info_socials">
            <SocialIcons alt="" network="instagram" width="60" height="60" fgColor="#4d4b44" bgColor="transparent" />
            <SocialIcons alt="" network="twitter" width="60" height="60" fgColor="#4d4b44" bgColor="transparent" />
            <SocialIcons alt="" network="facebook" width= "60" height="60" fgColor="#4d4b44" bgColor="transparent" />
            <SocialIcons alt="" network="linkedin" width="60" height="60" fgColor="#4d4b44" bgColor="transparent" />
        </div>
        
    </div>
    <div class="aboutMe_details">
        <h1>About Me</h1>
        <p>My name is Thusa (she/her) and I am a Registered Social Worker with over 7 years of experience working in mental health, with a Degree in Therapeutic Recreation and Master of Social Worker. Through my hospital work experience, I learned to incorporate a client centered approach while using theoretical practices to teach effective coping skills. <br> <br><br>

            I am a first-generation Tamil-Canadian and I work from a culturally-sensitive, client centred, and trauma-informed lens. I also provide services in Tamil & English. <br> <br> <br>
            
            In practice I use a generalist approach drawing from various evidence-based approaches including Cognitive Behaviour Therapy, Dialectical Behaviour Therapy, and Mindfulness. Most importantly, meeting clients where they are at.</p>
    </div>
</div>


<style>
    .aboutMe {

        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

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
        max-height: 270px;
        max-width: 250px;
        object-fit: cover;
        object-position: center top;
        border-radius: 100px 100px 0 0;
    }

    .aboutMe_info_name {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .aboutMe_info_name h1 {
        font-family: "Gilda Display", serif;
        font-size: 40px;
        font-weight: 300;
        margin-bottom: 0;
    }

    .aboutMe_info_name h3 {
        font-family: "Gilda Display", serif;
        font-size: 20px;
        font-weight: 300;
    }
    .aboutMe_details {
        max-width: 400px;
    }

    .aboutMe_details h1 {
        font-family: "Gilda Display", serif;
        font-size: 40px;
        font-weight: 300;

    }
    .aboutMe_details p {
        font-family: "Inter", sans-serif;
        font-size: 16px ;
    }

    .aboutMe_info_socials {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        
    }
</style>
