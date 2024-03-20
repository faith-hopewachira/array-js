let arr2 = [true, "green", "where",12,56];
arr2[arr2.length-1];
console.log('length', arr2.length);


//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(stringmyPets.join("Cow", "Bird", "Snake", "Dog"));


// //Write a JS script to sort the following string:let word = "sevink"
let word = (stringg) => {
    return stringg.split("").sort().join("");
};
 
console.log("Sorted String: ");
console.log(word("sevink"));


//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort((a, b) => a - b);
console.log(arr3); // Output: [5, 10, 80]

//Write a program to remove duplicates from the
// following array.Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple",   "orange", "mango", "mango"];

var arr = ["apple", "mango", "apple",   "orange", "mango", "mango"];
let uniqueChars = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
});

console.log(uniqueChars);



//Write a JS script to search for the following word in the array."way"If the word is present, 
//console it else console "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4];
if(arr5.includes("way"))
{console.log("way")}
else
{console.log("the search word was not found")}










