let size = 8;
let Board = "";
for (let j = 1; j <= size; j++){
    for (let i = 1; i <= size; i++){
        if ((i+j) % 2 == 0){
            Board = Board + " ";
        }
        else {
            Board = Board + "#";
        }
    }
    Board = Board + "\n";
}
console.log(Board);