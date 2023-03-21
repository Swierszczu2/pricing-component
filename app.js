const toggleButton = document.querySelector(".check");
const monthlyPrices = document.querySelectorAll(".monthly");
const anuallyPrices = document.querySelectorAll(".anually");

toggleButton.addEventListener("click", () => {
  anuallyPrices.forEach((price) => {
    price.classList.toggle("disabled");
  });
  monthlyPrices.forEach((price) => {
    price.classList.toggle("disabled");
  });
});
