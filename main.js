let output = document.getElementById("displayNum");

function numberClick(buttonElement) {
  if (output.innerHTML == "0") {
    if (buttonElement.innerHTML == "00") {
    } else {
      output.innerHTML = buttonElement.innerHTML;
    }
  } else {
    output.innerHTML = output.innerHTML + buttonElement.innerHTML;
  }
}

function otherClick(buttonElement) {
  if (buttonElement.innerHTML == "AC") {
    output.innerHTML = 0;
  } else if (isNaN(output.innerHTML.slice(-1))) {
  } else {
    if (buttonElement.innerHTML == "=") {
      output.innerHTML = eval(output.innerHTML);
    } else {
      output.innerHTML = output.innerHTML + buttonElement.innerHTML;
    }
  }
}
