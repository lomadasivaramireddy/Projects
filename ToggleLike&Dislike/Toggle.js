let puppyImage = document.getElementById("puppyImage");
let likeicon = document.getElementById("likeIcon");
let likebutton = document.getElementById("likeButton");

let condition = false;

function LikeButton() {
    if (condition === false) {
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeicon.style.color = "#0967d2";
        likebutton.style.color = "white";
        likebutton.style.backgroundColor = "#0967d2";
        condition = true;
    } else {
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeicon.style.color = "#cbd2d9";
        likebutton.style.color = "#9aa5b1";
        likebutton.style.backgroundColor = "#cbd2d9";
        condition = false;
    }
}