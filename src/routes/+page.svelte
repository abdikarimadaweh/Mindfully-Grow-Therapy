<script>
    import header from "../img/header.png"
    import positive from "../img/Positive.png"
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
                <p>Life can be challenging, especially when we experience stressors which can get in the way of us reaching our fullest potential.<br> <br>

                    You can be struggling with negative thoughts, distressing emotions, going through a difficult relationship or making sense of the events in your life. You may also find yourself repeating behaviours you are unhappy with, but struggle to break the pattern.<br> <br>
                    
                    No matter how big or small the problem, through therapy you can attain the tools needed to help you navigate through these difficult times</p>
            </div>
        </div>
    </div>

</section>


<style>
    .headerSection{
        height: 100vh;
    }

    .headerImg {
        display: block;
        margin: auto;
        width: 100%;
        height: auto;
        max-width: 800px;

    }
    .positiveSpace {
        display: flex;
        flex-direction: row;
    }
    .positiveImg {
        margin: auto;
        width: 100%;
        height: auto;
        max-width: 600px;
    }
    .positiveSpaceInfo {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        flex-direction: column;
        margin: auto;
    }
    .positiveSpace_img {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-right: 2rem ;
    }
    .positiveSpaceInfo_details p {
        font-size: 20px ;
    }
    .positiveSpaceInfo_title h1 {
        font-size: 43px;
    }
</style>