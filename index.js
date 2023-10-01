// Write your solution in this file!
let employee = {
    name : "SafeArray",
    streetAddress :"11"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newemployee = { ...employee };
    newemployee[key] = value;
    return newemployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newemployee = { ...employee };
    delete newemployee[key] ;
    return newemployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}