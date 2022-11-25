import './style.css'
import getEmployees from "./employeesFetch.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <h1>Employees by Salary</h1>
  <button id="button">Get employees</button>
  <ul class="employees">
    
  </ul>
`

const button = document.querySelector("#button");
const employees = document.querySelector(".employees");


button.addEventListener("click", async () => {
  const array = await getEmployees();
  console.log(array)

  const arrayMap = array.map(item => {
    return `<li>ID:${item.id} - ${item.name} - Salary:${item.salary}</li>`
  })

  employees.innerHTML = arrayMap.join("");
})


