const container = document.querySelector(".container");
const thankyou = document.querySelector(".thank-you");
const submitButton = document.getElementById("Submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");


submitButton.addEventListener("click", () => {
    thankyou.classList.remove ("hidden");
    container.style.display = "none"
})

rates.forEach((rat) => {
    rat.addEventListener("click", () => {
        rating.innerHTML = rat.innerHTML
    })
})
