let domain = "./fake-server";

function xhrEmployees() {

	return new Promise((reject, resolve)=>{

        //Create request
        const xhr = new XMLHttpRequest();

        //Configuration(GET employees from server)
        xhr.open('GET', `${domain}/employees.json`);

        //Called after response is received
		xhr.onload = () => {
			if (xhr.status === 200) {
                console.log(`Success ${xhr.status}: ${xhr.statusText}`)
                let data = JSON.parse(xhr.responseText)
                resolve(data)
			} else {
                console.log(`Error ${xhr.status}: ${xhr.statusText}`);
				reject(Error(xhr.statusText));
            }
		};

        xhr.onerror = () => {
            reject(Error("Oops!"));
        };

        //Send request over network
        xhr.send();
	});
}

function xhrSalaries() {
	//TODO returns salaries from json

    return new Promise((reject, resolve)=>{

        //Create request
        const xhr = new XMLHttpRequest();

        //Configuration(GET salaries from server)
        xhr.open('GET', `${domain}/salaries.json`);

        //Called after response is received
		xhr.onload = () => {
			if (xhr.status === 200) {
                console.log(`Success ${xhr.status}: ${xhr.statusText}`)
                let data = JSON.parse(xhr.responseText)
                resolve(data)
			} else {
                console.log(`Error ${xhr.status}: ${xhr.statusText}`);
				reject(Error(xhr.statusText));
            }
		};

        xhr.onerror = () => {
            reject(Error("Oops!"));
        };

        //Send request over network
        xhr.send();
	});
}

export default async function getEmployees(sort) {
    //TODO should be exposed function which returns array of employees => for example [{id:"id", "name":"test", "salary":""}]

    //waits for fetchEmployees and fetchSalaries to resolve
    const employeesArray = await xhrEmployees();
    const salariesArray = await xhrSalaries();
    
    const array = [];

    //forEach loop to match employee id's to salary, then push to empty array
    employeesArray.forEach(employee => {
        salariesArray.forEach(salary => {
            // if id has a match then push data to our created array
            if(employee.id == salary.employeeId) {
                //if salary is null, defaults to 0
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