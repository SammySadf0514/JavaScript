const weight = document.querySelector("#weight");
const height = document.querySelector("#height");

const calculate = document.querySelector("#calculate");
const reset = document.querySelector("#reset");

const result = document.querySelector("#result");
const status = document.querySelector("#status");

function calculateBMI() {
  let value1 = parseFloat(weight.value);
  let value2 = parseFloat(height.value);
  let bmi = (value1 / (value2 * value2)) * 10000;
  console.log(bmi);
  result.innerText = `${bmi.toFixed(2)}`;
  if (bmi < 18.5) {
    status.innerText = "Your BMI states that you're Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    status.innerText = "Your BMI states that you're Normal";
  } else if (bmi >= 25 && bmi < 29.9) {
    status.innerText = "Your BMI states that you're Overweight";
  } else {
    status.innerText = "Your BMI states that you're Obese";
  }
}

calculate.addEventListener("click", calculateBMI);

reset.addEventListener("click", () => {
  weight.value = "";
  height.value = "";
  result.innerText = "";
});
