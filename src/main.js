import './style.css'
import getEmployees from "./employeesFetch.js";

const button = document.querySelector("#employees");
const employees = document.querySelector(".employees");


// button.addEventListener("click", async () => {
  const array = await getEmployees();
  console.log(array)

  const arrayMap = array.map(item => {
    return `<li>ID:${item.id} - ${item.name} - Salary:${item.salary}</li>`
  })
  // const employeesMap = array.map(item => {
  //   return `<li>${item.id}: ${item.name}</li>`
  // })

  employees.innerHTML = arrayMap.join("");
// })

