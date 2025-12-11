import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";
import { displayTodos } from "../modules/displayTodos.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();


if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("You must login first!");
  window.location.href = "login.html";
}

async function loadTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  displayTodos(data.slice(0, 20)); 
}

loadTodos();
