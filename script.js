const principal = document.querySelector("#principal");
const rate = document.querySelector("#rate");
const frequency = document.querySelector("#freq");
const years = document.querySelector("#years");
const interest = document.querySelector("#interest");

function compoundInterest() {
  const freq = frequency.value;

  interest.textContent = `$${Math.floor((principal.value * (
    (1 + rate.value/100/freq) ** (freq*years.value)
  )*100))/100}`;

}

principal.addEventListener("input", compoundInterest);
rate.addEventListener("input", compoundInterest);
frequency.addEventListener("input", compoundInterest);
years.addEventListener("input", compoundInterest);