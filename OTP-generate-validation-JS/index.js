function handleInput() {
  const inputList = document.getElementById("input-list");
  inputList.addEventListener("input", (e) => {
    if(isNaN(e.target.value)){
      e.target.value = "";
      return;
    }
    const nextSibling = e.target.nextElementSibling;
    if(nextSibling) nextSibling.focus();
    console.log(e.target.value);
  });
}

function generateOTP(){
  const otp = Math.floor(1000 + Math.random() * 9000);
  const generatedOTP = document.getElementById("generated-otp");
  generatedOTP.innerText = otp;

}

generateOTP();
handleInput();