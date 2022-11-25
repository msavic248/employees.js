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

    //async await fetch request to get all salaries
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

export default async function getEmployees(sort) {
    //TODO should be exposed function which returns array of employees => for example [{id:"id", "name":"test", "salary":""}]

    const employeesArray = await fetchEmployees();
    const salariesArray = await fetchSalaries();
    const array = [];

    //forEach loop to match employee id's to salary, then push to empty array
    employeesArray.forEach(employee => {
        salariesArray.forEach(salary => {
            if(employee.id == salary.employeeId) {
                array.push({
                    id: employee.id,
                    name: employee.name,
                    salary: salary.salary ?? 0,
                })
            }
        })
    })

    //Sorting populated array either ascending or descending
    if(sort == "ascending") {
        const sortedArray = array.sort((a, b) => parseFloat(a.salary) - parseFloat(b.salary));
        
        return sortedArray;
    }
    
    if (sort == "descending") {
        const sortedArray = array.sort((a, b) => parseFloat(b.salary) - parseFloat(a.salary));

        return sortedArray;
    }

    // sort by id by default
    const sortedArray = array.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

    return sortedArray;
}