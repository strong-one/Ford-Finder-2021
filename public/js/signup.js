
const signupFormHandler = async function (event) {
  event.preventDefault();
  const nameEl = document.querySelector("#name");
  const emailEl = document.querySelector("#signup-email");
  const passwordEl = document.querySelector("#signup-password");

  fetch("/api/users", {
    method: "post",
    body: JSON.stringify({
      name: nameEl.value,
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
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
