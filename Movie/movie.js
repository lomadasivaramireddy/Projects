let titleInput=document.getElementById("titleInput");
let reviewTextarea=document.getElementById("reviewTextarea");
let reviewContainer=document.getElementById("reviewsContainer");
function clickButton(){
    let movieTitle=titleInput.value;
    let movieReview=reviewTextarea.value;
    let displayTitle=document.createElement('h4');
    displayTitle.textContent='movieTitle:'+ movieTitle;
    reviewContainer.appendChild(displayTitle);
    let displayReview=document.createElement('h3');
    displayReview.textContent='movieReview:'+ movieReview;
    reviewContainer.appendChild(displayReview);
}