// Write your solution in this file!
const employee = {
    name: 'Dennis',
    streetAddress: 25
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee };
    newEmployee[key] = value;
    key = 'sam';
    value = '11 Broadway';
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;

}

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {...employee };
    newEmployee[key] = value;
    delete newEmployee["name"];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}