// This one returns true when the given function returns true for every element in the array. 
//Implement every as a function that takes an array and a predicate function as parameters. 
//Write two versions, one using a loop and one using the some method.

// 1st version using a loop
function everyloop(array,test){
    let result = true;
    for (let i of array){
        result = result && test(i) 
    }
    return result;
}

console.log(everyloop([1, 3, 5], n => n < 10));
console.log(everyloop([2, 4, 16], n => n < 10));
console.log(everyloop([], n => n < 10));

// 2nd version using some method
function everysome(array,test){
    result = !array.some(e => !test(e))
    return result;    
}

console.log(everysome([1, 3, 5], n => n < 10));
console.log(everysome([2, 4, 16], n => n < 10));
console.log(everysome([], n => n < 10));
