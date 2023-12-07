const ratingContainer = document.querySelector(".rating-container");
const thanksContainer = document.querySelector(".thanks-container");
const submitBtn = document.getElementById("submit");
const rateAgainBtn = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    ratingContainer.style.display = "none";
});

rateAgainBtn.addEventListener("click", () => {
    thanksContainer.classList.add("hidden");
    ratingContainer.style.display = "block";
    rating.innerHTML = "";
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})