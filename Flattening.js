let arrays = [[1, 2, 3], [4, 5], [6]];

let result = [];
for (let i of arrays){
    result = result.concat(i);
}
console.log(result);

let result2 = (arrays.reduce((a,b) => a.concat(b),[]));
console.log(result2);
