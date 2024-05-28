let place : string [] = ['cape town' , 'delhi' , 'faisalabad' , 'bankok' , 'ahmedabad']
console.log('original : ' + place);
//print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...place].sort());

// . show that your array is still in its original order by printing it.
console.log('original :' + place);

//. print your array in reverse alphabetical order without changing the orderof the original list.
console.log('copy ' + [...place].sort().reverse());

//. show that your array is still in its original order by printing it again
console.log('copy ' + [...place].sort().reverse());

//. reverse the order  of your list. print the array to show that its order has changed.
console.log('original :' + place.sort().reverse());