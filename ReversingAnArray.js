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