//range function takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end. 
//sum function takes an array of numbers and returns the sum of these numbers

a = range(5,2,-1);
console.log(a);

b = sum(a);
console.log(b);

function range(start,end,step = 1){
    step = Math.abs(step);
    result = [];
    if (start < end){
        for (let i = start; i <= end; i += step)
        result.push(i);
    }
    else {
        for (let i = start; i >= end; i -= step)
        result.push(i);
    }
    return result;
}

function sum(range){
    result = 0;
    for (let i of range){
    result = result + i;
    }
    return result;
}
