<script>
    import Blue from "../../img/Blue_Lotus.png"
</script>


<div class="contact">
    <div class="contact_intro">
        <h1>How to book appointments</h1>
        <p>Mindfully Grow Therapy is a clinic offering individual virtual therapy <br>
         sessions to clients in Ontario, Canada.  <br><br><br>
         Book your free consult and/or follow-up session using the tabs under <br>
          the Services category. See below for a list of accepted insurance <br>
           companies Mindfully Grow Therapy works with.
        </p>
    </div>

    <h3><span><u><b>Please note:</b></u></span>  Registered Social Workers are exempt from collecting GST/HST, thus there are no taxes for services.</h3>

    <div class="contact_insurance">
        <h1>Accepting Insurance Companies</h1>
        <div class="contact_insurance_box">
            <div class="contact_insurance_1">
                <h3>Blue Shield</h3>
                <h3>BlueCross and BlueShield</h3>
                <h3>Canada Life | Great-West Life</h3>
                <h3>Desjardins</h3>
                <h3>Empire BlueCross BlueShield</h3>
                <h3>First Canadian Health</h3>
                <h3>Great-West Life</h3>
            </div>
            <div class="contact_insurance_2">
                <h3>Green Shield</h3>
                <h3>Johnston Group</h3>
                <h3>Manulife</h3>
                <h3>Medavie Blue Cross</h3>
                <h3>Medicare</h3>
                <h3>Sunlife</h3>
            </div>
        </div>
        <div class="contact_insurance_image">
            <img src={Blue} alt="BLUE LOGO" />
        </div>
    </div>

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
</div>



<style>
    .contact {
        display: flex;
        flex-direction: column;
    }

    .contact_intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 50px 20px;
        text-align: center;
    }

    .contact_intro h1 {
        font-weight: 300;
        color: #4d4b44;
        font-family: "Gilda Display", serif;
        font-size: 45px;
        margin: 0 0 20px 0;
    }

    .contact_intro p { 
        font-family: "Inter", sans-serif;
        font-size: 20px;
        font-weight: 300;
        color: #4d4b44;
        max-width: 100%;
    }

    .contact h3 {
        text-align: center;
        font-family: "Inter", sans-serif;
        font-size: 20px;
        font-weight: 300;
    }

    .contact_insurance {
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
        padding: 0 20px;
    }

    .contact_insurance h1 {
        text-align: center;
        font-weight: 300;
        color: #4d4b44;
        font-family: "Gilda Display", serif;
        font-size: 35px;
        margin: 50px 0 40px 0;
    }

    .contact_insurance_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .contact_insurance_1, .contact_insurance_2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .contact_insurance_image{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
    }

    .contact_insurance_image img {
        width: 100%;
        max-height: 270px;
        max-width: 250px;
        object-fit: cover;
    }

    .contactUs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;;
        margin: 20px 0 20px 0;
        padding: 50px 15px 50px 15px;
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
    padding: 10px 10px 10px 10px;
    background-color: transparent;
    border-color: #4d4b44;
    width: 100%;
    }

    .contactInputM {
        width: 100%;
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
    border: 1px solid #4d4b44;
    background-color: #4d4b44; 
    color: #fff; 
    font-size: 16px;
    font-family: 'Open Sans Variable', sans-serif;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    width: 100%;
    max-width: 200px; /* Optional: limit the width */
    margin-top: 20px;
}

.submitBtn:hover {
    background-color: #f4f4f4;
    color: #4d4b44; 
    border-color: #4d4b44;
}

    form p {
        font-family: 'Open Sans Variable', sans-serif;
        font-size: 13px;
        color: #4d4b44;
    }

    /* Responsive Media Queries */
    @media (min-width: 768px) {
        .contact_intro h1 {
            font-size: 50px;
        }

        .contact_intro p {
            font-size: 22px;
            max-width: 700px;
        }

        .contact_insurance_box {
            flex-direction: row;
            justify-content: space-between;
            gap: 50px;
        }

        .contact_insurance_1, .contact_insurance_2 {
            align-items: flex-start;
        }

    

        

        .contactUs_info h2 {
            font-size: 25px;
        }

        .contactUs_info p {
            font-size: 16px;
        }
    }

    @media (min-width: 1024px) {
        .contact_intro h1 {
            font-size: 60px;
        }

        .contact_intro p {
            font-size: 24px;
            max-width: 800px;
        }

        .contactUs_info h2 {
            font-size: 32px;
        }
    }
</style>