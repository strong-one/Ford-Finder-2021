const { response } = require("express");

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#login-email").value.trim();
  const password = document.querySelector("#login-password").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("User failed to log in. Please try again!");
    }
  }
};

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

document.querySelector(".login-form");
document.querySelector("submit", loginFormHandler);

// document.querySelector(".signup-form");
// document.querySelector("submit", signupFormHandler);
