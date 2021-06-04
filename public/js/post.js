const vehiclePostHandler = async function (event) {
  event.preventDefault();
  const vehicleEl = document.querySelector("#vehicle-model");
  const engineEl = document.querySelector("#vehicle-engine");
  const transmissionEl = document.querySelector("#vehicle-transmission");
  const colorEl = document.querySelector("#vehicle-color");

  fetch("/api/Userpost", {
    method: "post",
    body: JSON.stringify({
      model_name: vehicleEl.value,
      engine_type: engineEl.value,
      transmssion: transmissionEl.value,
      color: colorEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function () {
      document.location.replace("/");
    })
    .catch((err) => console.log(err));
};

document
  .querySelector(".post-form")
  .addEventListener("submit", vehiclePostHandler);
