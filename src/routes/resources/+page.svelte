<script>
    import "@fontsource/gilda-display";
    import "@fontsource/inter";
</script>

<div class="resources">
    <div class="resources_intro">
        <h1>This is <span>not a crisis</span> and/or distress service.</h1>
        <h2>If you are experiencing a medical and/or medical emergency please call 9-1-1 or visit your nearest emergency.</h2>
        <h3>See below for some Mental Health Resources & Supports in the Greater Toronto Area. It does not imply recommendation of any treatment and should not be substituted for advice provided by a Health Care Provider (HCP).</h3>
    </div>

    <div class="resources_box">
        <div class="resources_box_info">
            <div class="resources_box_info_title">
                <h2>Distress Centre</h2>
            </div>
            <div class="resources_box_info_details">
                <p>416-408-4357 or text 45645 <br> www.dcogt.com</p>
            </div>
        </div>

        <div class="resources_box_info">
            <div class="resources_box_info_title">
                <h2>Gerstein Crisis Centre</h2>
            </div>
            <div class="resources_box_info_details">
                <p>416-929-5200 <br> www.gersteincentre.org</p>
            </div>
        </div>

        <div class="resources_box_info">
            <div class="resources_box_info_title">
                <h2>Assaulted Women's <br> Helpful</h2>
            </div>
            <div class="resources_box_info_details">
                <p>1-866-863-0511 <br> www.awhl.org</p>
            </div>
        </div>

        <div class="resources_box_info">
            <div class="resources_box_info_title">
                <h2>VASANTHAM <br> Mental Health & <br> Addictions for Tamil <br> Community</h2>
            </div>
            <div class="resources_box_info_details">
                <p>416-847-4172 <br> www.vasantham.ca</p>
            </div>
        </div>

        <div class="resources_box_info">
            <div class="resources_box_info_title">
                <h2>Seniors Safety Line</h2>
            </div>
            <div class="resources_box_info_details">
                <p>1-866-299-0511 <br> www.eapon.ca</p>
            </div>
        </div>

        <div class="resources_box_info">
            <div class="resources_box_info_title">
                <h2>Kids Help Phone</h2>
            </div>
            <div class="resources_box_info_details">
                <p>1-800-668-6868 <br> www.kidshelpphone.ca</p>
            </div>
        </div>

        <div class="resources_box_info">
            <div class="resources_box_info_title">
                <h2>Bereaved Families <br> of Ontario</h2>
            </div>
            <div class="resources_box_info_details">
                <p>1-866-863-0511 <br> www.awhl.org</p>
            </div>
        </div>

        <div class="resources_box_info">
            <div class="resources_box_info_title">
                <h2>See a Doctor Virtually</h2>
            </div>
            <div class="resources_box_info_details">
                <p>CouchMD www.couchmd.ca <br> Ontario Virtual Care Clinic <br> www.virtualhealthclinic.com</p>
            </div>
        </div>

        <div class="resources_box_info">
            <div class="resources_box_info_title">
                <h2>Across Boundaries for Black & <br> Indigenous People/Persons of Colour</h2>
            </div>
            <div class="resources_box_info_details">
                <p>416-787-3007 <br> www.acrossboundaries.ca</p>
            </div>
        </div>

        <div class="resources_box_info">
            <div class="resources_box_info_title">
                <h2>Caribbean African <br> Canadian Social <br> Services</h2>
            </div>
            <div class="resources_box_info_details">
                <p>416-740-1056 <br> www.cafcan.org</p>
            </div>
        </div>

        <div class="resources_box_info">
            <div class="resources_box_info_title">
                <h2>LGBT Youth Line (29 years & under)</h2>
            </div>
            <div class="resources_box_info_details">
                <p>1-800-268-9688 | 647-694-4275</p>
            </div>
        </div>
    </div>
</div>

<style>
    .resources {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .resources_intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .resources_intro h1 {
        font-weight: 300;
        color: #4d4b44;
        font-family: "Gilda Display", serif;
        font-size: 45px;
        height: auto;
        width: 100%;
        max-width: 1200px;
    }

    .resources_intro span {
        color: #d82329;
        text-decoration: underline;
    }

    .resources_intro h2 {
        font-weight: 300;
        color: #4d4b44;
        font-family: "Inter", sans-serif;
        font-size: 30px;
        height: auto;
        width: 100%;
        max-width: 1200px;
    }

    .resources_intro h3 {
        font-weight: 300;
        color: #4d4b44;
        font-family: "Inter", sans-serif;
        font-size: 20px;
        height: auto;
        width: 100%;
        max-width: 1200px;
    }

    .resources_box {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .resources_box_info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 30px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f9f9f9;
        width: 100%;
        max-width: 800px;
    }

    .resources_box_info_title {
        margin-bottom: 10px;
        width: 100%;
    }

    .resources_box_info_title h2 {
        font-family: "Inter", sans-serif;
        font-size: 20px;
        font-weight: 300;
        color: #4d4b44;
    }

    .resources_box_info_details p {
        font-family: "Inter", sans-serif;
        font-size: 16px;
        font-weight: 300;
        color: #4d4b44;
        line-height: 1.5;
    }

    @media (min-width: 768px) {
        .resources_box_info {
            flex-direction: row;
            justify-content: space-between;
        }

        .resources_box_info_title {
            margin-right: 20px;
            width: auto;
        }

        .resources_box_info_details p {
            text-align: left;
        }
    }

    @media (min-width: 1200px) {
        .resources_box_info_title h2 {
            font-size: 22px;
        }

        .resources_box_info_details p {
            font-size: 18px;
        }
    }
</style>
