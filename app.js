const form = document.querySelector("#form");
const price = document.querySelector("#price");
const quantity = document.querySelector("#quantity");
const total = document.querySelector("#total");
const vat = document.querySelector("#vat");
const grand = document.querySelector("#grand");



form.addEventListener("submit", (e) => {
  e.preventDefault();

  var firstTotal = Number(price.value) + Number(quantity.value);
  var vatValue = Math.floor(firstTotal * 0.1);
  var lastTotal = firstTotal + vatValue;
  console.log(firstTotal);
  console.log(vatValue);
  console.log(lastTotal);
  total.innerHTML = `<p>Total : ${firstTotal}</p>`;
  vat.innerHTML = `<p>VAT : ${vatValue}</p>`;
  grand.innerHTML = `<p>Grand : ${lastTotal}</p>`;
})

