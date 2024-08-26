<script>
    import "@fontsource/gilda-display";
    import "@fontsource/inter";
</script>

<div class="qualifications">
    <h1>Qualifications</h1>
    <div class="qualifications_bigBox">
        <div class="qualifications_box">
            <div class="qualifications_box_title">
                <h2>Professional Memberships</h2>
            </div>
            <div class="qualifications_box_details">
                <p>Ontario College of Social Workers and Social Service Workers (OCSWSSW)<br><br>
                    Ontario Association of Social Workers (OASW)
                </p>
            </div>
        </div>
        <div class="qualifications_box">
            <div class="qualifications_box_title">
                <h2>Education</h2>
            </div>
            <div class="qualifications_box_details">
                <p>
                    Certificate of Concurrent Disorders, University of Toronto, 2021 <br><br>
                    Master of Social Work, University of Windsor, 2021<br><br>
                    Bachelor of Therapeutic Recreation, Seneca College, 2014
                </p>
            </div>
        </div>
        <div class="qualifications_box">
            <div class="qualifications_box_title">
                <h2>Additional Skills, Trainings & Committees</h2>
            </div>
            <div class="qualifications_box_details">
                <p>
                    Emotion Focused Therapy (EFT) for Couples, York University, 2022 <br><br>
                    Motivational Interviewing, Psychwire, 2021 <br><br>
                    Cognitive Behavioural Therapy (CBT) Specialization for Anxiety, University of Toronto | Ontario Institute for Studies in Education (OISE), 2021 <br><br>
                    Acceptance and Commitment Therapy (ACT) for Depression & Anxiety, Psychwire, 2021 <br><br>
                    Trauma Informed Care, Humber River Hospital, 2021 <br><br>
                    Dialectical Behavioural Therapy (DBT) for Mental Health Professionals, Psychwire, 2021 <br><br>
                    Cognitive Behavioural Therapy (CBT) Fundamental Skills, University of Toronto | Ontario Institute for Studies in Education (OISE), 2021 <br><br>
                    Concurrent Disorder Training, Centre for Addiction and Mental Health, 2018 <br><br>
                    Compassion Focus Therapy for Psychosis, Centre for Addiction and Mental Health, 2017
                </p>
            </div>
        </div>
    </div>
</div>

<style>
    .qualifications {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .qualifications h1 {
        font-family: "Gilda Display", serif;
        font-size: 36px;
        font-weight: 300;
        color: #4d4b44;
        margin-bottom: 40px;
        text-align: center;
    }

    .qualifications_bigBox {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .qualifications_box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f9f9f9;
    }

    .qualifications_box_title h2 {
        font-family: "Gilda Display", serif;
        font-size: 24px;
        font-weight: 300;
        color: #4d4b44;
        margin-bottom: 15px;
        text-align: center;
    }

    .qualifications_box_details p {
        font-family: "Inter", sans-serif;
        font-size: 16px;
        color: #4d4b44;
        text-align: center;
        line-height: 1.5;
        max-width: 800px;
    }

    @media (min-width: 768px) {
        .qualifications_box {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
        }

        .qualifications_box_title {
            margin-right: 20px;
        }

        .qualifications_box_details {
            max-width: 600px;
            text-align: left;
        }

        .qualifications_box_details p {
            text-align: left;
        }
    }

    @media (min-width: 1200px) {
        .qualifications_box_title h2 {
            font-size: 28px;
        }

        .qualifications_box_details p {
            font-size: 18px;
        }
    }
</style>