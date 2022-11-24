let domain = "./fake-server";

function getEmplFrom(callback) {

	return new Promise((reject, resolve)=>{

        //Create request
        let xhr = new XMLHttpRequest();

        //Configuration(GET employees from server, true flag for async)
        xhr.open('GET', domain + "/employees.json");

        //Response type
        xhr.responseType = 'json';

        //Called after response is received
		xhr.onload = function(event) {
			if (this.status !== 200) {
                console.log(`Error ${this.status}: ${this.statusText}`);
				reject(event);
				callback(event);
			}

            
            console.log(`Success ${this.status}: ${this.statusText}`)
			resolve(event);
		}

        //Send request over network
        xhr.send();
	});
}

function abRmnSal() {
	//TODO returns salaries from json

}

function getEmployees() {
    //TODO should be exposed function which returns array of employees => for example [{id:"id", "name":"test", "salary":""}]
    getEmplFrom(() => {
        console.log("Error")
    }).then(response => response.json())
    .then(data => {
        console.log(data)
    })
}

getEmployees();