const container = document.querySelector(".container");
const ratesButtons = document.getElementsByTagName("input");
const submitBtn = document.getElementById("submit-btn");

function selectRate() {
  for (let i = 0; i < ratesButtons.length; i++) {
    ratesButtons[i].onclick = () => {
      ratesButtons[i].classList.add("selected");
      let restButtons = Array.from(ratesButtons).filter(
        (ratesButton) => ratesButton !== ratesButtons[i]
      );
      restButtons.map((restButton) => {
        restButton.classList.remove("selected");
      });
    };
  }
}
selectRate();
submitBtn.addEventListener("click", submit);

function submit() {
  const selectedBtn = document.querySelector(".selected");
  if (!selectedBtn) {
    return;
  } else {
    container.classList.add("success-message");
    container.innerHTML = `
    <img src='./images/illustration-thank-you.svg'>
    <span id='rating-selected'>You selected ${selectedBtn.value} out of 5</span>
    <h2>Thank you</h2>
    <p>We appreciate you taking the time to give a rating. If you ever need more support,
    don’t hesitate to get in touch!</p>
    `;
    console.log(selectedBtn.id);
    selectedBtn.classList.remove("selected");
  }
}
