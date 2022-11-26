import './style.css'
import getEmployees from "./employeesFetch.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <h1>Employees.js Demo</h1>
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

//Return employees by id by default on button click, async await waits for getEmployees to resolve
button.addEventListener("click", async () => {
  const array = await getEmployees();

  //maps the getEmployees array so can be using in a list, join used to remove comma separator
  const arrayMap = array.map(item => {
    return `<li>${item.id}: ${item.name} - $${item.salary}</li>`
  }).join("");

  employees.innerHTML = arrayMap;

  //removes hidden class from buttons for demo purposes
  ascButton.classList.remove("hidden");
  descButton.classList.remove("hidden");
})

//Returns employees by ascending salary on button click
ascButton.addEventListener("click", async () => {

  //getEmployees takes a sort parameter set to ascending 
  const asc = "ascending";
  const array = await getEmployees(asc);

  const arrayMap = array.map(item => {
    return `<li>${item.id}: ${item.name} - $${item.salary}</li>`
  }).join("");

  employees.innerHTML = arrayMap;
})

//Returns employees by descending salary on button click
descButton.addEventListener("click", async () => {

  //getEmployees takes a sort parameter set to descending 
  const desc = "descending";
  const array = await getEmployees(desc);

  const arrayMap = array.map(item => {
    return `<li>${item.id}: ${item.name} - $${item.salary}</li>`
  }).join("");

  employees.innerHTML = arrayMap;
})


