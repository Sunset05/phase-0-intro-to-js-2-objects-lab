// Write your solution in this file!
//program that keep track of a company's employees
//store each employee as an object.
//object contains name and street address
//define an employee variable and asssign it to an object{name:streetAddress}
//literal syntax to create my objects
const employee = {
    name :'Keith', 
    streetAddress : '11 Broadway'
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Sam');

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;  
      
    return obj;
}

const secondFx = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Sam');


//1) deletes `key` from a clone of employee 
//and returns the new employee (it is non-destructive)
//2) does not modify the original employee (it is non-destructive)

function  deleteFromEmployeeByKey(obj, key){ //this function will take 2 arguments, any object and any key
    const newObj = { ...obj }; //new object is declared as a clone of the obj argument

    let deleteKey = [key];      //declaring deleteKey variable with let that will be 
                                //assigned to the key argument passed into the function.
                                //bracket notation used because key value is a string

    delete newObj[deleteKey];   //delete operator used on the new Object created by this fx
                                //that is pointing towards the value of the variable
                                //delteKey, which was assigned to the key we want deleted
  
    return newObj;              //return the cloned object with the deleted property
}

//execute the function
//create a shallow clone object of employee named function3 that
//has the name key removed
const thirdFx = deleteFromEmployeeByKey(employee, 'name'); 

function destructivelyDeleteFromEmployeeByKey(object, key){
        delete object[key]; 
        return object;
} 
const fourthFx = destructivelyDeleteFromEmployeeByKey(employee, 'name');



