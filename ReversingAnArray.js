// reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
//reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. 
//Neither may use the standard reverse method.

a = reverseArray(["A", "B", "C"]);
console.log(a);

b = [1, 2, 3, 4, 5];
reverseArrayInPlace(b);
console.log(b);

function reverseArrayInPlace(array){
    for (let i = 0; i <= Math.floor(array.length)/2; i++){
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;    
}

function reverseArray(array){
    result = [];
    for (let i of array){
        result.unshift(i);
    }
    return result;
}
