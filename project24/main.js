var car = 'subaru';
var age = 25;
var number = [1, 2, 3, 4];
//**String Tests**
//Test 1 : Equality  (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True  (case-insensitive)
//Test 2 : Strict equality (False)
console.log("Is car === 'subaru'? I predict false.");
console.log(car === 'subaru'); //false  (case-sensitive)
//revision
//Test 3 : Inequality (True)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); //True
//Test 4 : Inequality (false)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); //false(case-sensitive)
// **Lowercase Function Tests**
//Test 5 : Lowercase conversion (True)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); //True (converted to lowercase)
//Test 6 : Lowercase conversion (False)
console.log("Is car === car.toLowerCase()? I predict false.");
console.log(car === car.toLowerCase()); //False (original value remains uppercase)
// **Numerical Tests**
// Test 7 : Equality (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25); // True
// Test 8 : Inequality (False)
console.log("Is age != 30? I predict False.");
console.log(age != 30); // False
//Test 9 : Greater than (False)
console.log("Is age > 30? I predict False.");
console.log(age > 30); // False
// Test 10 : Less than or equal (True)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // True
// **Logical Operators**
// Test 11 : AND (True)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30); // True  (both condition met)
// Test 12 : OR (false)
console.log("Is age > 20 || age < 18? I predict False.");
console.log(age > 30 || age < 18); // False  (neither condition met)
// **Array Tests**
// Test 13 :  In array (True)
console.log("Is 3 in number? I predict True.");
console.log(3 in number); // true  (check for index existance)
// Test 14 : Not in array (false)
console.log("Is 5 not in number? I predict True.");
console.log(5 in number); // true  (negation of "in" operator)
