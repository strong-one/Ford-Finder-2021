const loginFormHandler = async function (event) {
  event.preventDefault();
  const emailEl = document.querySelector("#login-email");
  const passwordEl = document.querySelector("#login-password");
  fetch("/api/users/login", {
    method: "post",
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function () {
      document.location.replace("/");
    })
    .catch((err) => console.log(err));
};
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

// const { response } = require("express");

// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector("#login-email");
//   const password = document.querySelector("#login-password");
//   if (email && password) {
//     const response = await fetch("/api/users/login", {
//       method: "POST",
//       body: JSON.stringify({ email: email.value, password: password.value }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("User failed to log in. Please try again!");
//     }
//   }
// };
// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const username = document.querySelector("#username").value.trim();
//   const email = document.querySelector("#signup-email").value.trim();
//   const password = document.querySelector("#signup-password").value.trim();

//   if (username && email && password) {
//     const response = await fetch("/api/users", {
//       method: "POST",
//       body: JSON.stringify({ username, email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("User failed to log in. Please try again!");
//     }
//   }
// };

// document.querySelector(".signup-form");
// document.querySelector("submit", signupFormHandler);
