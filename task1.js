// Step 2: Implement Interface in Class
var EmployeeDetails = /** @class */ (function () {
    // Step 3: Constructor
    function EmployeeDetails(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    // Step 4: Implement displayInfo Method
    EmployeeDetails.prototype.displayInfo = function () {
        console.log("Employee ID: " + this.id);
        console.log("Employee Name: " + this.name);
        console.log("Employee Salary: " + this.salary);
    };
    return EmployeeDetails;
}());
// Step 5: Create Object and Call Method
var emp1 = new EmployeeDetails(1, "Ali", 50000);
emp1.displayInfo();
