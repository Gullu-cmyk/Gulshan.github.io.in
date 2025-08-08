document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const loginId = document.getElementById("loginId").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Set your correct credentials here
  const correctLoginId = "web";
  const correctPassword = "dev";

  if (loginId === correctLoginId && password === correctPassword) {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";
    // Optional: Redirect to college website after 1s
    setTimeout(() => {
      window.location.href = "PartOfCollegeweb.html"; // Change to your college site file
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Incorrect login ID or password.";
  }
});
