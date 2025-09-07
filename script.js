
//the script will start only once the html ccontent is fully loaded
document.addEventListener("DOMContentLoaded", function() {

//storing references of the various html tags so that we can manipulate them
//dynamically

    const searchbtn = document.getElementById("search-btn");
     
    const usernameInput = document.getElementById("user-input");

    const statsContainer = document.querySelector(".stats-container");
    
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");

    const easyLabel = document.getElementById("Easy-label");
    const mediumLabel = document.getElementById("Medium-label")
    const hardLabel = document.getElementById("Hard-label");

    const cardStatsContainer = document.querySelector(".stats-cards");
    

    function validateUsername(username){
        if(username.trim() === ""){
            alert("username should not be empty");
            return false;
        }

     //validating username format using Regex

        const regex = /^[a-zA-Z][a-zA-Z0-9_.]{2,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching){
            alert("Invalid username");
        }
        return isMatching;
    }
    statsContainer.style.display = "none";
    async function fetchUserDetails(username) {
        searchbtn.textContent = "searching..";
        searchbtn.disabled = true;
        statsContainer.style.display = "block";
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        statsContainer.style.display = "block";
        try{
            const response = await fetch(url);
            if(!response.ok){
            throw new Error("unable to fetch user details");
            }
    
        const data = await response.json();
        console.log("loggin data:",data);

        displayUserData(data);
    }
    catch(error){
     statsContainer.innerHTML = `${error.message}`;
    }
    finally{
     searchbtn.textContent = "Search";  
     searchbtn.disabled = false;
    }
}
 
function updateProgress(solved, total, label, circle) {

    if(total === 0) {
        label.textContent = "0/0";
        circle.style.setProperty("--progress-degree","0%");
        return;
    }

    const progressPercentage = (solved/total)*100;
    circle.style.setProperty("--progress-degree",`${progressPercentage}%`);
    label.textContent =`${solved}/${total}`;
}

function displayUserData(data){
    if(!data || data.status !== "success"){
        statsContainer.innerHTML = "<p style = 'color: red;'>Invalid User or no data available</p>";
        return;
    }

    //extracting values from API
    const totalQues = data.totalQuestions;
    const totalEasyQues = data.totalEasy;
    const totalMediumQues = data.totalMedium;
    const totalHardQues = data.totalHard;
    
    const totalSolvedQues = data.totalSolved;
    const solvedEasyQues = data.easySolved;
    const solvedMediumQues = data.mediumSolved;
    const solvedHardQues = data.hardSolved;
    
    //updating the progress bars
    updateProgress(solvedEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
    updateProgress(solvedMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
    updateProgress(solvedHardQues, totalHardQues, hardLabel, hardProgressCircle);

    // extracting card data
     const acceptedRate = data.acceptanceRate ;
     const userRank = data.ranking;
     const contributedPoints = data.contributionPoints;
     const reputation = data.reputation;

     console.log("card ka data:",acceptedRate, userRank, contributedPoints, reputation);

     //updating cards UI  
   cardStatsContainer.innerHTML = 
   `<div class="card">Acceptance Rate: ${acceptedRate}%</div>
    <div class="card">Ranking: ${userRank}</div>
    <div class="card">Contribution Points: ${contributedPoints}</div>
    <div class="card">Reputation: ${reputation}</div>`
}


let debounceTimer;
    searchbtn.addEventListener("click",function(){
        
        const username = usernameInput.value;
        console.log("loggin username:",username);
        if(validateUsername(username)) {
           fetchUserDetails(username);
        }
    });
});
