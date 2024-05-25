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
handleInput();