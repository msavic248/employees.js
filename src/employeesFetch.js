let domain = "./fake-server";

async function fetchEmployees() {

    //fetch request to get all employees
    // fetch(`${domain}/employees.json`)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data)
    //     return data;
    // })

    //async await fetch request to get all employees
    try{
        const response = await fetch(`${domain}/employees.json`);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch(error) {
        console.error(error)
    }
    
}

async function fetchSalaries() {
	//TODO returns salaries from json

    //async await fetch request to get all employees
    try{
        const response = await fetch(`${domain}/salaries.json`);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch(error) {
        console.error(error)
    }

}

export default async function getEmployees() {
    //TODO should be exposed function which returns array of employees => for example [{id:"id", "name":"test", "salary":""}]

    const employeesArray = await fetchEmployees();
    const salariesArray = await fetchSalaries();
    const sortedArray = [];

    employeesArray.forEach(employee => {
        salariesArray.forEach(salary => {
            if(employee.id == salary.employeeId) {
                sortedArray.push({
                    id: employee.id,
                    name: employee.name,
                    salary: salary.salary,
                })
            }
        })
    })

    return sortedArray;
}