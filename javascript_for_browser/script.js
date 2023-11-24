// primitive data types
/*
    String - sequence of characters. Must be in quotes or backticks
    Number - Integers as well as floating-point numbers
    Boolean - Logical entity / true or false
    Null - intentional absence of any object value
    undefined - a varibale that has not yet been defined or assigned
    symbol - built-in  object whose constructor returns a unique symbol
    BigInt - Numbers that are greater than number type
    
    
*/
 
/*  Primitive Types - Stored directly in the stack, where it is accessed from 
    eg: string , number , boolean, null, undefined, symbol , BigInt

    Reference Types - stored in heap an accessed by reference
    eg: array functions objects
*/
// values are stored on the stack
// const name = 'john';
// const age = 30;

// //reference values are stored on the heap

// const person = {
//     name: 'Brad',
//     age: 40
// }
// let newName = name;
// let newPerson = person;

// console.log(name, newName)
// console.log(person, newPerson)

// Type conversion
// let amount = '100';

// // amount = parseInt(amount)
// amount = +amount

// amount = amount.toString()
// console.log(amount, typeof amount)

// let number = null;

// let newNumber = parseInt(number)
// console.log(newNumber)
// console.log(Math.sqrt(-1))

// Operators

// let exponent = 2**3;
// exponent += 4;
// exponent -= 4;
// exponent **= 2;
// console.log(exponent)

// Comparison  Operator

// x = 2

// Type Coercion
// let x = 5 + '5'
// x = Number(x)
// console.log(x, typeof x)