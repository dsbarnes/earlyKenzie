document.getElementById("submit-btn").addEventListener("submit", submitData);

function submitData() {
  event.preventDefault();
  event.stopPropagation();

  let userEmail = document.getElementById("email").value;
  let userUsername = document.getElementById("username").value;
  let userPassword = document.getElementById("password").value;
  let userConfirmPassword = document.getElementById("confirm-password").value;

  let userObject = {
    email: userEmail,
    username: userUsername,
    password: userPassword,
    confirmPassword: userConfirmPassword
  };
  console.log(userObject);

  fetch("./api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userObject)
  });
}
