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

