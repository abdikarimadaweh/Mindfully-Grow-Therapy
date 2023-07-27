<script>
    import header from "../img/header.png"
    import positive from "../img/Positive.png"
    import "@fontsource/gilda-display"
    import "@fontsource/inter"
    import '@fontsource-variable/open-sans';
</script>



<section class="headerSection">

    <img class="headerImg" src={header}  alt="temp" />
</section>

<section>
    <div class="positiveSpace">
        <div class="positiveSpace_img">
            <img class="positiveImg" src={positive}  alt="temp" />
        </div>
        <div class="positiveSpaceInfo">
            <div class="positiveSpaceInfo_title">
                <h1>The first step is with you</h1>
            </div>
            <div class="positiveSpaceInfo_details">
                <p>Life can be challenging, especially when we experience stressors which can get in the way of us reaching our fullest potential.<br> <br> <br>

                    You can be struggling with negative thoughts, distressing emotions, going through a difficult relationship or making sense of the events in your life. You may also find yourself repeating behaviours you are unhappy with, but struggle to break the pattern.<br> <br> <br>
                    
                    No matter how big or small the problem, through therapy you can attain the tools needed to help you navigate through these difficult times</p>
            </div>
        </div>
    </div>

</section>
<section>
<div class="contactUs">
    <div class="contactUs_info">
        <h2>Contact Us</h2>
        <p>Reach out to us and let us know if there is anything</p>
        <p>we can do for you and for a FREE 15-minute</p>
        <p>consultation.</p>
    </div>


    <form>
        <input
        placeholder="Full name"
        class="contactInput"
        type="text"
      />
      <input
        placeholder="Email"
        class="contactInput"
        type="email"
      />

      <textarea
            placeholder="Message"
            class="contactInputM contactInput"
          />

        <p>This form is protected by reCAPTCHA and the Google <u>Privacy Policy</u> and <u>Terms of Service</u> apply.</p>

        <button class="submitBtn" type="submit">Submit</button>
    
    </form>

</div>
</section>


<style>
    .headerSection{
    }

    .headerImg {
        display: block;
        margin: auto;
        width: 100%;
        height: auto;
        max-width: 600px;

    }
    .positiveSpace {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        padding: 40px 0 40px 0;
    }
    .positiveImg {
        margin: auto;
        width: 100%;
        height: auto;
        max-width: 600px;
    }
    .positiveSpaceInfo {
        display: flex;
        flex-direction: column;
    }
    .positiveSpace_img {
        margin-right: 4rem ;
    }

    .positiveSpaceInfo_details {
        padding-right: 50px;
        max-width: 680px;
        
    }
    .positiveSpaceInfo_details p {
        font-family: "Inter", sans-serif;
        font-size: 18px ;
        color: #4d4b44;
    }

    .positiveSpaceInfo_title {
        max-width: 680px;
    }
    .positiveSpaceInfo_title h1 {
        font-family: "Gilda Display", serif;
        font-size: 45px;
        font-weight: 300;
        color: #4d4b44;
        margin-bottom: 10px;
    }
    .contactUs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 20px 0 20px 0;
        padding: 50px 0 50px 0;
        background-color: #c2d0dd;
    }
    .contactUs_info {
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;
    }
    .contactUs_info h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Open Sans Variable', sans-serif;
        font-weight: 700;
        font-size: 30px;
    }
    .contactUs_info p {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        font-family: 'Open Sans Variable', sans-serif;
        font-weight: 500;
        font-size: 18px;
        width: 100%;
        height: auto;
        max-width: 500px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: auto;
        margin-right: auto;

    }

    .contactInput {
        outline: 2px solid transparent;
    outline-offset: 2px;
    border-radius: 5px;
    border-width: 1px;
    margin-bottom: 13px;
    padding: 15px 10px 15px 10px;
    background-color: transparent;
    border-color: #4d4b44;
    width: 400px;


    }
    .contactInputM {
    width: 400px;
    }

    .contactInput:hover,
    .contactInput:focus {
        border-color: #f4f4f4;
    }

    .submitBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border-width: 1px;
        width: 200px;
        height: 35px;
        background-color: #f4f4f4;
        font-size: 15px;
        font-family: 'Open Sans Variable', sans-serif;
        margin-top: 10px;
    }
    form p {
        font-family: 'Open Sans Variable', sans-serif;
        font-size: 13px;
        color: #4d4b44;
    }

</style>