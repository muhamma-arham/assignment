var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var place = ['cape town', 'delhi', 'faisalabad', 'bankok', 'ahmedabad'];
console.log('original : ' + place);
//print your array in alphabetical order without modifying the actual list.
console.log('copy ' + __spreadArray([], place, true).sort());
// . show that your array is still in its original order by printing it.
console.log('original :' + place);
//. print your array in reverse alphabetical order without changing the orderof the original list.
console.log('copy ' + __spreadArray([], place, true).sort().reverse());
//. show that your array is still in its original order by printing it again
console.log('copy ' + __spreadArray([], place, true).sort().reverse());
//. reverse the order  of your list. print the array to show that its order has changed.
console.log('original :' + place.sort().reverse());
