var cars = 'subaru';
//Test 1 : Equality comparison (True)
console.log("Is car = 'subaru'? I predict True.");
console.log(cars == 'subaru'); //True
//Test 2 : Strict equality comparison comparison (True)
console.log("Is car = 'subaru'? I predict True.");
console.log(cars === 'subaru'); //True
//Test 3 : Inequality comparison (false)
console.log("Is car != 'subaru'? I predict false.");
console.log(cars == 'subaru'); //false
//Test 4 : Strict Inequality comparison (false)
console.log("Is car !== 'subaru'? I predict false.");
console.log(cars !== 'subaru'); //false
//Test 5 : Less than comparison (false)
console.log("Is car < 'subaru'? I predict false.");
console.log(cars < 'subaru'); //false (lexicographic comparison)
//Test 6 : Greater than comparison (false)
console.log("Is car > 'subaru'? I predict false.");
console.log(cars > 'subaru'); //false  (lexicographic comparison)
//Test 7 : Less than or equal comparison (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(cars >= 'subaru'); //True
//Test 8 : Greater than or equal comparison (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(cars >= 'subaru'); //True
//Test 9 : Checking truthiness (True)
console.log("Is car? I predict True.");
console.log(cars); //True (non-empty string is truthy)
//Test 10 : Checking falsiness (false)
console.log("Is !car? I predict false.");
console.log(!cars); //false (negation of a trusthy value)
//Test 3 : Inequality comparison (false)
console.log("Is car != 'subaru'? I predict false.");
console.log(cars == 'subaru'); //false
