let intervalId = "";
let otp = "";
let givenOTP = "";

function handleInput() {
  const inputList = document.getElementById("input-list");
  inputList.addEventListener("input", (e) => {
    value = e.target.value;
    //check if number or not
    if (isNaN(value)) {
      value = "";
      return;
    }
    //move cursor to next input field
    const nextSibling = e.target.nextElementSibling;
    if (nextSibling) nextSibling.focus();
    //compare otp
    givenOTP += value;
    const result = document.getElementById("result");
    if (givenOTP.length == 4) {
      if (otp === parseInt(givenOTP)) {
        clearInterval(intervalId);
        result.innerText = "OTP Validated Successfully";
        result.classList.add("text-green-500");
        result.classList.remove("text-red-500");
      } else {
        result.classList.add("text-red-500");
        result.classList.remove("text-green-500");
        result.innerText = "Invalid OTP";
        //Start again
        clearInterval(intervalId);
      }
    }
  });
}

function generateOTP() {
  otp = Math.floor(1000 + Math.random() * 9000);
  const generatedOTP = document.getElementById("generated-otp");
  generatedOTP.innerText = otp;
}

function handleReset() {
  //clear givenOTP to count again
  givenOTP = "";
  //reset input field
  const inputList = document.getElementById("input-list");
  let childrenList = inputList.children;
  for (let input of childrenList) {
    input.value = "";
  }
  //Must clear present interval to set the new interval
  //otherwise two interval will continuously run
  clearInterval(intervalId);
  handleTimer();
  //clear result in DOM
  const result = document.getElementById("result");
  result.innerText = "";
  //move focus to first input
  inputList.children[0].focus();
}

function handleTimer() {
  generateOTP();
  //Remaining time
  let time = 30;
  const timeRemaining = document.getElementById("time-remaining");
  timeRemaining.innerText = time;
  intervalId = setInterval(() => {
    //update timer in DOM
    timeRemaining.innerText = time;
    // console.log("Time ", time);
    time--;
    //if time is up generate new otp
    if (time < 0) {
      // Reset Remaining time
      time = 30;
      generateOTP();
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  handleTimer(); // Call handleTimer when the DOM content is loaded
  handleInput(); // Add event listener for input once
});
