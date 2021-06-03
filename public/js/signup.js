const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#signup-email").value.trim();
    const password = document.querySelector("#signup-password").value.trim();
  
    if (username && email && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("User failed to log in. Please try again!");
      }
    }
  };

  document.querySelector(".signup-form");
  document.querySelector("submit", signupFormHandler);