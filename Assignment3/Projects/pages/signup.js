import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

document.getElementById("signupBtn").addEventListener("click", () => {
  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful!");
});
