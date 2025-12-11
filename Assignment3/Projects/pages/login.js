import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No user found! Please signup.");
    return;
  }

  if (storedUser.email === email && storedUser.password === password) {
    localStorage.setItem("isLoggedIn", true);
    window.location.href = "todos.html";
  } else {
    alert("Invalid credentials!");
  }
});
