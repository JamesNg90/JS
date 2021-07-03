countChar("abcskfasfBBB",a);

function countChar(string,Char) {
    let result = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] == Char){
            result++;
        }
    }
console.log(result);
}