const input = document.querySelector("#Ipt");
const button = document.getElementById("btn");
const todotext = document.querySelector("#todo");

let tache = "";
input.addEventListener("input", (e) => {
  tache = e.target.value.trim();
});

button.addEventListener("click", () => {
  if (tache === "") {
    return;
  } else {
    todotext.innerHTML += `<li>${tache} <button class="deleteBtn">Supprimer</button> </li>`;
    input.value = "";
    tache = "";
  }
});

todotext.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) e.target.closest("li").remove();
  else {
    return;
  }
});
