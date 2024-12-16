document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  let userEmail = "";
  let userPassword = "";
  const button = document.querySelector("#btn");
  button.disabled = true;
  getValue = () => {
    emailInput.addEventListener("input", (e) => {
      userEmail = e.target.value;
      checkAdmin();
    });
    passwordInput.addEventListener("input", (e) => {
      userPassword = parseInt(e.target.value);
      checkAdmin();
    });
  };
  checkAdmin = () => {
    if (userEmail.toLowerCase() === "nurislam" && userPassword === 123456) {
      button.disabled = false;
      button.style.background = "green";
    } else if (userEmail === "" && userPassword === "") {
      button.style.background = "#ed4599";
    } else {
      button.disabled = true;
      button.style.background = "red";
    }
  };
  getValue();
  button.addEventListener("click", () => {
    alert("You are right");
  });
});
