var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }

  if (
    /^\d+$/.test(pass.value) ||
    /^[A-Za-z\d]+$/.test(pass.value) ||
    /^[!@#$%^&*(),.?":{}|<>]+$/.test(pass.value)
  ) {
    str.innerHTML = "weak";
    pass.style.borderColor = "#ff5925";
    msg.style.color = "#ff5925";
  }
  //medium conditions need to fixed
  else if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(pass.value)) {
    str.innerHTML = "medium";
    pass.style.borderColor = "yellow";
    msg.style.color = "yellow";
  } else if (
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/.test(
      pass.value
    )
  ) {
    str.innerHTML = "strong";
    pass.style.borderColor = "#26d730";
    msg.style.color = "#26d730";
  }
});
