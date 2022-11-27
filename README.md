# Employees.js - [DEMO HERE](https://employees-js.vercel.app)

## How to use

The getEmployees() function returns a promise therefore must be resolved to access the array returned. The function also accepts a string parameter for ascending or descending by salary.

### using .then()
```
getEmployees().then(data => {
    //code here
})
```

### using async/await
```
const array = await getEmployees();
//code here
```
Make sure to set parent function to async

### Sort parameter
getEmployees() function accepts a string as a parameter, currently only supports either/or:

* "ascending"
* "descending"

e.g.
```
const array = await getEmployees("ascending")
```

getEmployees() function will sort **array by employee id by default** when no sort parameter is defined.

## Notes / Questions

Fetch was used over XMLHttprequest as it made it easier to handle async requests, you can see my attempt at XMLHttprequest in employeeXHR.js file.

_Any reason why XMLHttprequests would be prefered over Fetch?_

Vite was used as a build tool so I could also present the project with a demo, Vercel was used to deploy the project as they can deploy private GitHub repos.

_What build tools are you using?_

Didn't deploy a server so I place ./fake-server into the public server so fetch could work locally.

_Would you have suggested I deploy the files on a server via Node or Express?_

