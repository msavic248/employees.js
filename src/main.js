import './style.css'
import getEmployees from "./employeesFetch.js";

const app = document.querySelector("#app");
const sort = "";

app.innerHTML = `
  <h1>Employees by Salary</h1>
  <button id="button">Get employees by id</button><br>

  <button id="ascButton" class="hidden">Salary ascending</button>
  <button id="descButton" class="hidden">Salary descending</button>

  <ul class="employees">
    
  </ul>
`

const button = document.querySelector("#button");
const ascButton = document.querySelector("#ascButton");
const descButton = document.querySelector("#descButton");
const employees = document.querySelector(".employees");

//Add additional buttons
button.addEventListener("click", async () => {
  const array = await getEmployees();

  const arrayMap = array.map(item => {
    return `<li>${item.id}: ${item.name} - $${item.salary}</li>`
  })

  employees.innerHTML = arrayMap.join("");

  ascButton.classList.remove("hidden");
  descButton.classList.remove("hidden");
})

ascButton.addEventListener("click", async () => {
  const asc = "ascending";

  const array = await getEmployees(asc);

  const arrayMap = array.map(item => {
    return `<li>${item.id}: ${item.name} - $${item.salary}</li>`
  })

  employees.innerHTML = arrayMap.join("");
})

descButton.addEventListener("click", async () => {
  const desc = "descending";

  const array = await getEmployees(desc);

  const arrayMap = array.map(item => {
    return `<li>${item.id}: ${item.name} - $${item.salary}</li>`
  })

  employees.innerHTML = arrayMap.join("");
})


