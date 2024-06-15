//import the lodash library
const lodash = require('lodash');

//define a function to remove duplicates from an array using lodash
const removeDuplicate = arr => {

    //use lodash's uniq function to remove duplicates from the array
    return lodash.uniq(arr);
}

//define the input array with duplicates
const inputArray = [1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10];

//call the removeDuplicate function to remove duplicates from the input array
const uniqueArray = removeDuplicate(inputArray);

//print the resulting array with duplicates removed
console.log(uniqueArray);